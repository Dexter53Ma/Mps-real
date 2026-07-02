"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const WHATSAPP_NUMBER = "212621189496";

const steps = [
  { id: 1, title: "Your Info" },
  { id: 2, title: "Property" },
  { id: 3, title: "Services" },
  { id: 4, title: "Photos" },
  { id: 5, title: "Review" },
];

const propertyTypes = ["Villa", "Riad", "Apartment", "Penthouse", "Townhouse", "Land"];
const locations = ["Palmeraie", "Medina", "Hivernage", "Guéliz", "Route de Ouarzazate", "Other"];
const serviceOptions = [
  "Full Property Management",
  "Short-term Rental Management",
  "Long-term Rental Management",
  "Concierge Services",
  "Property Maintenance",
  "Interior Design & Staging",
  "Marketing & Photography",
  "Guest Management",
  "Cleaning Services",
  "Security Services",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
  yearBuilt: string;
  hasPool: string;
  hasGarden: string;
  currentOccupancy: string;
  rentalGoal: string;
  targetBudget: string;
  services: string[];
  additionalNotes: string;
  photos: { file: File; preview: string }[];
}

const initialData: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  propertyType: "", location: "", bedrooms: "", bathrooms: "", size: "",
  yearBuilt: "", hasPool: "", hasGarden: "", currentOccupancy: "",
  rentalGoal: "", targetBudget: "", services: [], additionalNotes: "", photos: [],
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManagePropertyModal({ isOpen, onClose }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const resetAndClose = useCallback(() => {
    setFormData(initialData);
    setCurrentStep(1);
    setSubmitted(false);
    onClose();
  }, [onClose]);

  const updateField = useCallback((field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const toggleService = useCallback((service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  }, []);

  const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const remaining = 3 - formData.photos.length;
    const newPhotos = Array.from(files).slice(0, remaining).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData((prev) => ({ ...prev, photos: [...prev.photos, ...newPhotos] }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [formData.photos.length]);

  const removePhoto = useCallback((index: number) => {
    setFormData((prev) => {
      const newPhotos = [...prev.photos];
      URL.revokeObjectURL(newPhotos[index].preview);
      newPhotos.splice(index, 1);
      return { ...prev, photos: newPhotos };
    });
  }, []);

  const formatWhatsAppMessage = (): string => {
    const L: string[] = [];
    L.push("*NEW PROPERTY MANAGEMENT INQUIRY*");
    L.push("");
    L.push("*OWNER INFORMATION*");
    L.push(`Name: ${formData.firstName} ${formData.lastName}`);
    L.push(`Email: ${formData.email}`);
    L.push(`Phone: ${formData.phone}`);
    L.push("");
    L.push("*PROPERTY DETAILS*");
    L.push(`Type: ${formData.propertyType}`);
    L.push(`Location: ${formData.location}`);
    L.push(`Bedrooms: ${formData.bedrooms}`);
    L.push(`Bathrooms: ${formData.bathrooms}`);
    L.push(`Size: ${formData.size} m²`);
    if (formData.yearBuilt) L.push(`Year Built: ${formData.yearBuilt}`);
    if (formData.hasPool) L.push(`Pool: ${formData.hasPool}`);
    if (formData.hasGarden) L.push(`Garden: ${formData.hasGarden}`);
    if (formData.currentOccupancy) L.push(`Occupancy: ${formData.currentOccupancy}`);
    L.push("");
    L.push("*RENTAL GOALS*");
    if (formData.rentalGoal) L.push(`Goal: ${formData.rentalGoal}`);
    if (formData.targetBudget) L.push(`Budget: ${formData.targetBudget}`);
    L.push("");
    L.push("*REQUESTED SERVICES*");
    formData.services.forEach((s) => L.push(`- ${s}`));
    if (formData.additionalNotes) {
      L.push("");
      L.push("*NOTES*");
      L.push(formData.additionalNotes);
    }
    if (formData.photos.length > 0) {
      L.push("");
      L.push(`${formData.photos.length} photo(s) attached`);
    }
    return L.join("\n");
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const message = formatWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    await new Promise((r) => setTimeout(r, 600));
    window.open(url, "_blank");
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const canNext = (): boolean => {
    switch (currentStep) {
      case 1: return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 2: return !!(formData.propertyType && formData.location && formData.bedrooms && formData.bathrooms && formData.size);
      case 3: return formData.services.length > 0;
      default: return true;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={resetAndClose}
      />

      {/* Panel */}
      <div className="relative w-full md:max-w-[640px] md:max-h-[90vh] bg-white md:rounded-[20px] rounded-t-[20px] md:rounded-[20px] flex flex-col overflow-hidden max-h-[95vh] animate-slide-up md:animate-fade-in shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-[20px] md:px-[24px] py-[16px] border-b border-[#1A171A]/8 shrink-0">
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] bg-[#274038] rounded-full flex items-center justify-center">
              <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-[16px] font-semibold text-[#1A171A] leading-tight">Manage Your Property</h2>
              <p className="text-[12px] text-[#1A171A]/50">{steps[currentStep - 1].title} — Step {currentStep} of 5</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[#1A171A]/5 transition-colors"
          >
            <svg className="w-[18px] h-[18px] text-[#1A171A]" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-[6px] px-[20px] py-[12px] shrink-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`h-[4px] rounded-full transition-all duration-300 ${
                step.id <= currentStep ? "bg-[#274038] w-[32px]" : "bg-[#1A171A]/10 w-[16px]"
              }`}
            />
          ))}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-[20px] md:px-[28px] pb-[20px]">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-[40px] text-center">
              <div className="w-[64px] h-[64px] bg-[#25D366] rounded-full flex items-center justify-center mb-[20px]">
                <svg className="w-[32px] h-[32px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-semibold text-[#1A171A] mb-[8px]">Sent!</h3>
              <p className="text-[14px] text-[#1A171A]/60 leading-[1.5] mb-[24px] max-w-[300px]">
                Your property details have been sent. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={resetAndClose}
                className="px-[24px] py-[10px] bg-[#274038] text-white rounded-full text-[14px] font-medium hover:bg-[#1A171A] transition-colors min-h-[44px]"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-[16px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">First Name *</label>
                      <input type="text" value={formData.firstName} onChange={(e) => updateField("firstName", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px]"
                        placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Last Name *</label>
                      <input type="text" value={formData.lastName} onChange={(e) => updateField("lastName", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px]"
                        placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px]"
                      placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Phone *</label>
                    <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px]"
                      placeholder="+212 6 21 18 94 96" />
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="space-y-[14px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Property Type *</label>
                      <select value={formData.propertyType} onChange={(e) => updateField("propertyType", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">Select type</option>
                        {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Location *</label>
                      <select value={formData.location} onChange={(e) => updateField("location", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">Select location</option>
                        {locations.map((l) => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-[12px]">
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Bedrooms *</label>
                      <select value={formData.bedrooms} onChange={(e) => updateField("bedrooms", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">-</option>
                        {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n}{n===10?'+':''}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Bathrooms *</label>
                      <select value={formData.bathrooms} onChange={(e) => updateField("bathrooms", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">-</option>
                        {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n}{n===8?'+':''}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Size m² *</label>
                      <input type="number" value={formData.size} onChange={(e) => updateField("size", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px]"
                        placeholder="250" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-[12px]">
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Year Built</label>
                      <input type="number" value={formData.yearBuilt} onChange={(e) => updateField("yearBuilt", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px]"
                        placeholder="2020" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Occupancy</label>
                      <select value={formData.currentOccupancy} onChange={(e) => updateField("currentOccupancy", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">Select</option>
                        <option>Vacant</option><option>Owner-occupied</option>
                        <option>Tenant-occupied</option><option>Short-term rental</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-[12px]">
                    {[{ label: "Pool", field: "hasPool" as const }, { label: "Garden", field: "hasGarden" as const }].map(({ label, field }) => (
                      <div key={field}>
                        <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">{label}</label>
                        <div className="flex gap-[6px]">
                          {["Yes", "No"].map((v) => (
                            <button key={v} onClick={() => updateField(field, v)}
                              className={`flex-1 py-[8px] rounded-[8px] text-[13px] font-medium border transition-all min-h-[40px] ${
                                formData[field] === v ? "bg-[#274038] text-white border-[#274038]" : "bg-white text-[#1A171A] border-[#1A171A]/15"
                              }`}>{v}</button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="space-y-[16px]">
                  <p className="text-[13px] text-[#1A171A]/50">Select at least one service.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
                    {serviceOptions.map((service) => (
                      <button key={service} onClick={() => toggleService(service)}
                        className={`flex items-center gap-[8px] p-[10px] rounded-[8px] text-[13px] text-left border transition-all min-h-[40px] ${
                          formData.services.includes(service)
                            ? "bg-[#274038]/5 border-[#274038] text-[#274038]"
                            : "bg-white border-[#1A171A]/10 text-[#1A171A]"
                        }`}>
                        <div className={`w-[16px] h-[16px] rounded-[3px] border flex items-center justify-center shrink-0 transition-all ${
                          formData.services.includes(service) ? "bg-[#274038] border-[#274038]" : "border-[#1A171A]/20"
                        }`}>
                          {formData.services.includes(service) && (
                            <svg className="w-[10px] h-[10px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        {service}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Rental Goal</label>
                      <select value={formData.rentalGoal} onChange={(e) => updateField("rentalGoal", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">Select goal</option>
                        <option>Maximize rental income</option><option>Steady long-term tenants</option>
                        <option>Personal use + rental</option><option>Sell the property</option><option>Just maintenance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Budget (MAD)</label>
                      <select value={formData.targetBudget} onChange={(e) => updateField("targetBudget", e.target.value)}
                        className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors min-h-[44px] bg-white">
                        <option value="">Select range</option>
                        <option>Under 5,000 MAD</option><option>5,000 - 10,000 MAD</option>
                        <option>10,000 - 20,000 MAD</option><option>20,000 - 50,000 MAD</option><option>50,000+ MAD</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#1A171A] mb-[4px]">Additional Notes</label>
                    <textarea value={formData.additionalNotes} onChange={(e) => updateField("additionalNotes", e.target.value)} rows={3}
                      className="w-full px-[12px] py-[10px] border border-[#1A171A]/15 rounded-[10px] text-[14px] focus:outline-none focus:border-[#274038] focus:ring-1 focus:ring-[#274038] transition-colors resize-none"
                      placeholder="Any details about your property..." />
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {currentStep === 4 && (
                <div className="space-y-[16px]">
                  <p className="text-[13px] text-[#1A171A]/50">Upload up to 3 photos (optional).</p>
                  <div className="grid grid-cols-3 gap-[12px]">
                    {formData.photos.map((photo, idx) => (
                      <div key={idx} className="relative aspect-square rounded-[10px] overflow-hidden group">
                        <img src={photo.preview} alt="" className="w-full h-full object-cover" />
                        <button onClick={() => removePhoto(idx)}
                          className="absolute top-[6px] right-[6px] w-[24px] h-[24px] bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-[12px] h-[12px] text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                    {formData.photos.length < 3 && (
                      <button onClick={() => fileInputRef.current?.click()}
                        className="aspect-square rounded-[10px] border-2 border-dashed border-[#1A171A]/15 flex flex-col items-center justify-center gap-[4px] text-[#1A171A]/30 hover:border-[#274038] hover:text-[#274038] transition-all">
                        <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                        </svg>
                        <span className="text-[11px] font-medium">Add</span>
                      </button>
                    )}
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="hidden" />
                  <p className="text-[12px] text-[#1A171A]/30">{formData.photos.length}/3 photos</p>
                </div>
              )}

              {/* Step 5 */}
              {currentStep === 5 && (
                <div className="space-y-[14px]">
                  <div className="bg-[#FBEFDD] rounded-[10px] p-[14px]">
                    <h4 className="text-[13px] font-semibold text-[#1A171A] mb-[8px]">👤 Your Info</h4>
                    <div className="text-[13px] text-[#1A171A]/70 space-y-[2px]">
                      <p>{formData.firstName} {formData.lastName}</p>
                      <p>{formData.email} · {formData.phone}</p>
                    </div>
                  </div>
                  <div className="bg-[#FBEFDD] rounded-[10px] p-[14px]">
                    <h4 className="text-[13px] font-semibold text-[#1A171A] mb-[8px]">🏠 Property</h4>
                    <div className="text-[13px] text-[#1A171A]/70 space-y-[2px]">
                      <p>{formData.propertyType} · {formData.location}</p>
                      <p>{formData.bedrooms} bed · {formData.bathrooms} bath · {formData.size} m²</p>
                      {formData.hasPool && <p>Pool: {formData.hasPool} · Garden: {formData.hasGarden || '—'}</p>}
                    </div>
                  </div>
                  <div className="bg-[#FBEFDD] rounded-[10px] p-[14px]">
                    <h4 className="text-[13px] font-semibold text-[#1A171A] mb-[8px]">⚙️ Services</h4>
                    <div className="flex flex-wrap gap-[4px]">
                      {formData.services.map((s) => (
                        <span key={s} className="px-[8px] py-[3px] bg-[#274038]/10 text-[#274038] rounded-full text-[11px]">{s}</span>
                      ))}
                    </div>
                    {formData.rentalGoal && <p className="text-[13px] text-[#1A171A]/70 mt-[8px]">Goal: {formData.rentalGoal}</p>}
                  </div>
                  {formData.photos.length > 0 && (
                    <div className="bg-[#FBEFDD] rounded-[10px] p-[14px]">
                      <h4 className="text-[13px] font-semibold text-[#1A171A] mb-[8px]">📷 Photos ({formData.photos.length})</h4>
                      <div className="flex gap-[6px]">
                        {formData.photos.map((p, i) => (
                          <img key={i} src={p.preview} className="w-[50px] h-[50px] object-cover rounded-[6px]" alt="" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="flex items-center justify-between px-[20px] md:px-[28px] py-[14px] border-t border-[#1A171A]/8 shrink-0 bg-white">
            {currentStep > 1 ? (
              <button onClick={() => setCurrentStep((s) => s - 1)}
                className="flex items-center gap-[6px] px-[14px] py-[8px] text-[13px] font-medium text-[#1A171A] border border-[#1A171A]/15 rounded-full hover:bg-[#1A171A]/5 transition-all min-h-[40px]">
                <svg className="w-[12px] h-[12px]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 6H4M4 6l3-3M4 6l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back
              </button>
            ) : <div />}

            {currentStep < 5 ? (
              <button onClick={() => setCurrentStep((s) => s + 1)} disabled={!canNext()}
                className={`flex items-center gap-[6px] px-[18px] py-[8px] text-[13px] font-medium rounded-full transition-all min-h-[40px] ${
                  canNext() ? "bg-[#274038] text-white hover:bg-[#1A171A]" : "bg-[#1A171A]/10 text-[#1A171A]/30 cursor-not-allowed"
                }`}>
                Next
                <svg className="w-[12px] h-[12px]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h4M6 4l2 2-2 2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={isSubmitting}
                className="flex items-center gap-[6px] px-[18px] py-[8px] text-[13px] font-semibold bg-[#25D366] text-white rounded-full hover:bg-[#20BD5A] transition-all min-h-[40px]">
                {isSubmitting ? (
                  <svg className="w-[14px] h-[14px] animate-spin" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                    <path d="M14 8a6 6 0 01-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                )}
                Send via WhatsApp
              </button>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-up { animation: slideUp 0.3s ease-out; }
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </div>
  );
}
