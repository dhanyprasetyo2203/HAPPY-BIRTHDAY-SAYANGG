// DATA MOBIL - Menggunakan folder "image"
const carsData = [
    { id: 1, name: "Toyota Fortuner", price6: 800000, price12: 1500000, price24: 2500000, capacity: 7, image: "image/fortuner.jpg" },
    { id: 2, name: "Toyota Hiace", price6: 800000, price12: 1500000, price24: 2500000, capacity: 10, image: "image/hiace.jpg" },
    { id: 3, name: "Toyota Innova Venturer", price6: 450000, price12: 800000, price24: 1350000, capacity: 7, image: "image/innova venturer.jpg" },
    { id: 4, name: "Toyota Avanza", price6: 280000, price12: 500000, price24: 850000, capacity: 7, image: "image/avanza.png" },
    { id: 5, name: "Toyota Innova Reborn", price6: 450000, price12: 800000, price24: 1350000, capacity: 7, image: "image/innova.jpg" }
];

// VARIABEL GLOBAL
let currentSelectedCar = carsData[0];
let currentDurasi = "12";
let currentPrice = 1500000;
let uploadedFile = null;
let uploadedFileData = null;

// DATA TRANSLATIONS
const translations = {
    id: {
        tagline: "Premium Driver Service",
        nav_home: "Home",
        nav_services: "Layanan",
        nav_cars: "Mobil",
        nav_booking: "Booking",
        nav_contact: "Kontak",
        hero_subtitle: "Rental Mobil Jakarta dengan Driver Profesional | Aman, Nyaman, Terpercaya",
        btn_booking: "Pesan Sekarang",
        btn_fleet: "Lihat Armada",
        services_tag: "Layanan Kami",
        services_title: "Kami <span class='highlight'>Melayani</span>",
        service1_title: "Antar Jemput Bandara",
        service1_desc: "Layanan antar jemput ke Bandara Soekarno-Hatta, Halim, dan bandara lainnya. Tepat waktu & profesional.",
        service2_title: "Perjalanan Dinas",
        service2_desc: "Solusi transportasi untuk perjalanan bisnis, meeting, dan keperluan kantor dengan driver profesional.",
        service3_title: "Wisata & Liburan",
        service3_desc: "Nikmati liburan Anda dengan armada nyaman dan driver yang tahu tempat wisata terbaik di Jakarta.",
        service4_title: "Acara Khusus",
        service4_desc: "Layanan untuk pernikahan, wisuda, dan acara khusus lainnya dengan armada premium.",
        cars_tag: "Armada Premium",
        cars_title: "Pilih <span class='highlight'>Mobil Favorit</span> Anda",
        price_tag: "Harga Sewa Mobil",
        price_title: "Sudah termasuk <span class='highlight'>driver & BBM</span>, tanpa biaya tersembunyi",
        booking_tag: "Booking Sekarang",
        booking_title: "Pesan <span class='highlight'>Mobil</span> Dalam 3 Menit",
        booking_subtitle: "Isi form lengkap, upload bukti DP, dan booking akan kami proses",
        form_title: "Form Pemesanan",
        label_name: "Nama Lengkap",
        label_wa: "Nomor WhatsApp",
        label_car: "Pilih Mobil",
        label_date: "Tanggal Sewa",
        label_time: "Jam Penjemputan",
        label_duration: "Durasi",
        label_pickup: "Lokasi Penjemputan",
        label_destination: "Tujuan Perjalanan",
        label_notes: "Catatan Tambahan",
        summary_title: "Detail Harga & Pembayaran",
        summary_car: "Mobil dipilih:",
        summary_duration: "Durasi:",
        summary_total: "Total Harga:",
        summary_dp: "DP (30%):",
        summary_remaining: "Sisa Pembayaran:",
        info_overtime: "⚠️ Overtime: Rp 100.000/jam (melebihi durasi)",
        info_exclude: "💰 Harga belum termasuk tol & parkir",
        info_nokey: "🚫 Tidak ada opsi lepas kunci (wajib dengan driver)",
        payment_title: "Metode Pembayaran",
        payment_name: "a/n: Sudarmi",
        payment_note: "Booking diproses setelah pembayaran DP",
        upload_label: "Upload Bukti Transfer DP",
        upload_text: "Klik untuk upload",
        upload_format: "Format: JPG, PNG (Max 2MB)",
        btn_confirm: "Kirim Konfirmasi ke WhatsApp",
        booking_note: "*Booking akan diproses setelah kami menerima bukti transfer DP",
        cta_title: "Butuh Bantuan Cepat?",
        cta_desc: "Hubungi tim kami sekarang untuk konsultasi gratis dan cek ketersediaan mobil",
        cta_btn: "Chat WhatsApp Sekarang",
        contact_title: "Hubungi Kami"
    },
    en: {
        tagline: "Premium Driver Service",
        nav_home: "Home",
        nav_services: "Services",
        nav_cars: "Cars",
        nav_booking: "Booking",
        nav_contact: "Contact",
        hero_subtitle: "Jakarta Car Rental with Professional Driver | Safe, Comfortable, Trusted",
        btn_booking: "Book Now",
        btn_fleet: "View Fleet",
        services_tag: "Our Services",
        services_title: "We <span class='highlight'>Serve</span>",
        service1_title: "Airport Transfer",
        service1_desc: "Pick-up and drop-off service to Soekarno-Hatta, Halim airports. On time & professional.",
        service2_title: "Business Trip",
        service2_desc: "Transportation solution for business travel, meetings, and office needs with professional driver.",
        service3_title: "Tour & Vacation",
        service3_desc: "Enjoy your vacation with comfortable fleet and drivers who know Jakarta's best tourist spots.",
        service4_title: "Special Events",
        service4_desc: "Service for weddings, graduations, and other special events with premium fleet.",
        cars_tag: "Premium Fleet",
        cars_title: "Choose Your <span class='highlight'>Favorite Car</span>",
        price_tag: "Car Rental Price",
        price_title: "Includes <span class='highlight'>driver & fuel</span>, no hidden fees",
        booking_tag: "Book Now",
        booking_title: "Book <span class='highlight'>Car</span> in 3 Minutes",
        booking_subtitle: "Fill out the form, upload DP proof, and we will process your booking",
        form_title: "Order Form",
        label_name: "Full Name",
        label_wa: "WhatsApp Number",
        label_car: "Select Car",
        label_date: "Rental Date",
        label_time: "Pickup Time",
        label_duration: "Duration",
        label_pickup: "Pickup Location",
        label_destination: "Destination",
        label_notes: "Additional Notes",
        summary_title: "Price & Payment Details",
        summary_car: "Selected Car:",
        summary_duration: "Duration:",
        summary_total: "Total Price:",
        summary_dp: "DP (30%):",
        summary_remaining: "Remaining Payment:",
        info_overtime: "⚠️ Overtime: Rp 100,000/hour (exceeds duration)",
        info_exclude: "💰 Price excludes toll & parking",
        info_nokey: "🚫 No key release option (must be with driver)",
        payment_title: "Payment Method",
        payment_name: "a/n: Sudarmi",
        payment_note: "Booking is processed after DP payment",
        upload_label: "Upload DP Transfer Proof",
        upload_text: "Click to upload",
        upload_format: "Format: JPG, PNG (Max 2MB)",
        btn_confirm: "Send Confirmation to WhatsApp",
        booking_note: "*Booking will be processed after we receive DP transfer proof",
        cta_title: "Need Quick Help?",
        cta_desc: "Contact our team now for free consultation and car availability check",
        cta_btn: "Chat WhatsApp Now",
        contact_title: "Contact Us"
    },
    ar: {
        tagline: "خدمة سائق فاخرة",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_cars: "السيارات",
        nav_booking: "الحجز",
        nav_contact: "اتصل بنا",
        hero_subtitle: "تأجير السيارات في جاكرتا مع سائق محترف | آمن، مريح، موثوق",
        btn_booking: "احجز الآن",
        btn_fleet: "عرض الأسطول",
        services_tag: "خدماتنا",
        services_title: "نحن <span class='highlight'>نخدم</span>",
        service1_title: "خدمة المطار",
        service1_desc: "خدمة الذهاب والإياب إلى مطاري سوكارنو هاتا وحليم. في الوقت المحدد ومهنية.",
        service2_title: "رحلات العمل",
        service2_desc: "حلول النقل لرحلات العمل والاجتماعات والاحتياجات المكتبية مع سائق محترف.",
        service3_title: "الجولات والعطلات",
        service3_desc: "استمتع بعطلتك مع أسطول مريح وسائقين يعرفون أفضل الأماكن السياحية في جاكرتا.",
        service4_title: "المناسبات الخاصة",
        service4_desc: "خدمة لحفلات الزفاف والتخرج والمناسبات الخاصة الأخرى مع أسطول فاخر.",
        cars_tag: "أسطول فاخر",
        cars_title: "اختر <span class='highlight'>سيارتك المفضلة</span>",
        price_tag: "أسعار تأجير السيارات",
        price_title: "يشمل <span class='highlight'>السائق والوقود</span>، بدون رسوم خفية",
        booking_tag: "احجز الآن",
        booking_title: "احجز <span class='highlight'>السيارة</span> في 3 دقائق",
        booking_subtitle: "املأ النموذج، حمّل إثبات DP، وسنقوم بمعالجة حجزك",
        form_title: "نموذج الطلب",
        label_name: "الاسم الكامل",
        label_wa: "رقم WhatsApp",
        label_car: "اختر السيارة",
        label_date: "تاريخ التأجير",
        label_time: "وقت الاستلام",
        label_duration: "المدة",
        label_pickup: "موقع الاستلام",
        label_destination: "الوجهة",
        label_notes: "ملاحظات إضافية",
        summary_title: "تفاصيل السعر والدفع",
        summary_car: "السيارة المختارة:",
        summary_duration: "المدة:",
        summary_total: "السعر الإجمالي:",
        summary_dp: "الدفعة المقدمة (30%):",
        summary_remaining: "المبلغ المتبقي:",
        info_overtime: "⚠️ العمل الإضافي: 100,000 روبية/ساعة (يتجاوز المدة)",
        info_exclude: "💰 السعر لا يشمل الرسوم ومواقف السيارات",
        info_nokey: "🚫 لا يوجد خيار تسليم المفتاح (يجب أن يكون مع السائق)",
        payment_title: "طرق الدفع",
        payment_name: "ا/ن: سودارمي",
        payment_note: "تتم معالجة الحجز بعد دفع DP",
        upload_label: "تحميل إثبات تحويل DP",
        upload_text: "انقر للتحميل",
        upload_format: "التنسيق: JPG، PNG (الحد الأقصى 2 ميجابايت)",
        btn_confirm: "إرسال التأكيد إلى WhatsApp",
        booking_note: "*ستتم معالجة الحجز بعد استلام إثبات تحويل DP",
        cta_title: "هل تحتاج مساعدة سريعة؟",
        cta_desc: "اتصل بفريقنا الآن للاستشارة المجانية والتحقق من توفر السيارة",
        cta_btn: "دردشة WhatsApp الآن",
        contact_title: "اتصل بنا"
    }
};

// ========== RENDER FUNCTIONS ==========
function renderPricelist() {
    const container = document.getElementById("pricelist-grid");
    if (!container) return;
    
    container.innerHTML = carsData.map(car => `
        <div class="pricelist-card">
            <h3>${car.name}</h3>
            <div class="price-list">6 Jam: Rp ${car.price6.toLocaleString('id-ID')}</div>
            <div class="price-list">12 Jam: Rp ${car.price12.toLocaleString('id-ID')}</div>
            <div class="price-list">24 Jam: Rp ${car.price24.toLocaleString('id-ID')}</div>
        </div>
    `).join('');
}

function renderCars() {
    const container = document.getElementById("cars-grid");
    if (!container) return;
    
    container.innerHTML = carsData.map((car, index) => `
        <div class="car-card" data-aos="fade-up" data-aos-delay="${index * 100}" onclick="selectCar(${car.id})">
            <img class="car-image" src="${car.image}" alt="${car.name}" loading="lazy">
            <div class="car-info">
                <h3>${car.name}</h3>
                <div class="price">Rp ${car.price12.toLocaleString('id-ID')} <span style="font-size:0.9rem;">/ 12 jam</span></div>
                <div class="capacity"><i class="fas fa-users"></i> ${car.capacity} penumpang | <i class="fas fa-user-check"></i> + Driver</div>
                <button class="btn-primary" style="width:100%; margin-top:8px" onclick="event.stopPropagation(); selectCar(${car.id})">
                    <i class="fas fa-shopping-cart"></i> Pilih Mobil Ini
                </button>
            </div>
        </div>
    `).join('');
}

function selectCar(carId) {
    const car = carsData.find(c => c.id === carId);
    if (car) {
        currentSelectedCar = car;
        updateMobilSelect(carId);
        updatePriceCalculation();
        showToast(`${car.name} dipilih! Silakan lanjutkan booking.`);
        document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    }
}

function updateMobilSelect(selectedId) {
    const select = document.getElementById("mobilSelect");
    if (!select) return;
    
    select.innerHTML = carsData.map(car => 
        `<option value="${car.id}" ${car.id === selectedId ? 'selected' : ''}>${car.name} - Rp ${car.price12.toLocaleString('id-ID')}/12 jam</option>`
    ).join('');
}

function getPriceByDuration(car, durasi) {
    if (durasi === "6") return car.price6;
    if (durasi === "12") return car.price12;
    return car.price24;
}

function updatePriceCalculation() {
    const durasi = currentDurasi;
    const totalPrice = getPriceByDuration(currentSelectedCar, durasi);
    const dp = Math.round(totalPrice * 0.3);
    const sisa = totalPrice - dp;
    
    document.getElementById("selectedCarName").innerText = currentSelectedCar.name;
    document.getElementById("summaryDurasi").innerText = durasi === "6" ? "6 jam" : (durasi === "12" ? "12 jam" : "24 jam (Harian)");
    document.getElementById("totalHarga").innerHTML = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    document.getElementById("dpAmount").innerHTML = `Rp ${dp.toLocaleString('id-ID')}`;
    document.getElementById("sisaBayar").innerHTML = `Rp ${sisa.toLocaleString('id-ID')}`;
    
    currentPrice = totalPrice;
}

// ========== UPLOAD BUKTI TRANSFER ==========
function setupUpload() {
    const uploadArea = document.getElementById("uploadArea");
    const fileInput = document.getElementById("buktiTransfer");
    const previewContainer = document.getElementById("previewContainer");
    const previewImage = document.getElementById("previewImage");
    const removeBtn = document.getElementById("removeImage");
    
    if (!uploadArea) return;
    
    uploadArea.addEventListener("click", () => fileInput.click());
    
    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.match('image.*')) {
                showToast("Hanya file gambar yang diperbolehkan!", true);
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                showToast("Ukuran file maksimal 2MB!", true);
                return;
            }
            
            uploadedFile = file;
            const reader = new FileReader();
            reader.onload = function(event) {
                uploadedFileData = event.target.result;
                previewImage.src = uploadedFileData;
                previewContainer.style.display = "inline-block";
                uploadArea.style.display = "none";
            };
            reader.readAsDataURL(file);
        }
    });
    
    removeBtn.addEventListener("click", () => {
        uploadedFile = null;
        uploadedFileData = null;
        fileInput.value = "";
        previewContainer.style.display = "none";
        uploadArea.style.display = "block";
    });
}

// ========== VALIDASI FORM ==========
function validateForm() {
    let isValid = true;
    
    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const tglSewa = document.getElementById("tglSewa").value;
    const jamPenjemputan = document.getElementById("jamPenjemputan").value;
    const lokasiJemput = document.getElementById("lokasiJemput").value.trim();
    const tujuan = document.getElementById("tujuan").value.trim();
    
    document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
    
    if (!nama) { showError("error-nama", "Nama lengkap wajib diisi"); isValid = false; }
    if (!wa) { showError("error-wa", "Nomor WhatsApp wajib diisi"); isValid = false; }
    else if (!/^[0-9]{10,13}$/.test(wa.replace(/\D/g, ''))) {
        showError("error-wa", "Nomor WhatsApp tidak valid (10-13 digit)");
        isValid = false;
    }
    if (!tglSewa) { showError("error-tgl", "Tanggal sewa wajib dipilih"); isValid = false; }
    if (!jamPenjemputan) { showError("error-jam", "Jam penjemputan wajib dipilih"); isValid = false; }
    if (!lokasiJemput) { showError("error-lokasi", "Lokasi penjemputan wajib diisi"); isValid = false; }
    if (!tujuan) { showError("error-tujuan", "Tujuan perjalanan wajib diisi"); isValid = false; }
    if (!uploadedFile) { showError("error-upload", "Harap upload bukti transfer DP"); isValid = false; }
    
    return isValid;
}

function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.innerText = message;
        errorEl.classList.add('show');
    }
}

// ========== SEND TO WHATSAPP ==========
function sendToWhatsApp() {
    if (!validateForm()) {
        showToast("Harap lengkapi semua data yang diperlukan!", true);
        return;
    }
    
    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const mobilSelect = document.getElementById("mobilSelect");
    const mobilId = parseInt(mobilSelect.value);
    const mobil = carsData.find(c => c.id === mobilId) || currentSelectedCar;
    const tglSewa = document.getElementById("tglSewa").value;
    const jamPenjemputan = document.getElementById("jamPenjemputan").value;
    const durasiSelect = document.getElementById("durasiSelect");
    const durasi = durasiSelect.value === "6" ? "6 Jam" : (durasiSelect.value === "12" ? "12 Jam" : "24 Jam (Harian)");
    const lokasiJemput = document.getElementById("lokasiJemput").value.trim();
    const tujuan = document.getElementById("tujuan").value.trim();
    const catatan = document.getElementById("catatan").value.trim();
    
    const totalPrice = currentPrice;
    const dp = Math.round(totalPrice * 0.3);
    const sisa = totalPrice - dp;
    
    // Format nomor WA
    let waNumber = wa.replace(/\D/g, '');
    if (waNumber.startsWith('0')) waNumber = '62' + waNumber.substring(1);
    if (!waNumber.startsWith('62')) waNumber = '62' + waNumber;
    
    const catatanText = catatan ? `\n📝 Catatan: ${catatan}` : '';
    
    const message = `🏎️ BATAVIA RENT CAR - BOOKING BARU 🏎️

┌──────────────────
│ 📋 DATA PEMESAN
├──────────────────
│ 👤 Nama: ${nama}
│ 📱 WhatsApp: ${wa}
│ 📅 Tanggal Sewa: ${tglSewa}
│ ⏰ Jam Jemput: ${jamPenjemputan}
│ 📍 Lokasi Jemput: ${lokasiJemput}
│ 🎯 Tujuan: ${tujuan}
└──────────────────

┌──────────────────
│ 🚗 DETAIL MOBIL
├──────────────────
│ 🚙 Mobil: ${mobil.name}
│ ⏱️ Durasi: ${durasi}
│ 💰 Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}
│ 💳 DP (30%): Rp ${dp.toLocaleString('id-ID')}
│ 💵 Sisa Pembayaran: Rp ${sisa.toLocaleString('id-ID')}
└──────────────────

┌──────────────────
│ ✅ KONFIRMASI PEMBAYARAN
├──────────────────
│ Saya sudah melakukan pembayaran DP dan bukti transfer sudah saya upload di website
└──────────────────${catatanText}

✨ Status: Menunggu Konfirmasi Admin ✨`;
    
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    showToast("Pesanan Anda berhasil dikirim, silakan tunggu konfirmasi admin melalui WhatsApp");
    
    setTimeout(() => {
        if (confirm("Booking berhasil dikirim! Reset form untuk booking baru?")) {
            resetForm();
        }
    }, 3000);
}

function resetForm() {
    document.getElementById("bookingForm").reset();
    document.getElementById("uploadArea").style.display = "block";
    document.getElementById("previewContainer").style.display = "none";
    uploadedFile = null;
    uploadedFileData = null;
    document.getElementById("buktiTransfer").value = "";
    currentSelectedCar = carsData[0];
    currentDurasi = "12";
    updateMobilSelect(1);
    updatePriceCalculation();
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("tglSewa").value = today;
    document.getElementById("jamPenjemputan").value = "08:00";
    
    showToast("Form berhasil direset!");
}

// ========== LANGUAGE SWITCHER ==========
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.text = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    localStorage.setItem('preferredLanguage', lang);
}

function setupLanguageSwitcher() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'id';
    switchLanguage(savedLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    const bookingBtn = document.getElementById("bookingWhatsappBtn");
    if (bookingBtn) bookingBtn.addEventListener("click", sendToWhatsApp);
    
    const mobilSelect = document.getElementById("mobilSelect");
    if (mobilSelect) {
        mobilSelect.addEventListener("change", function() {
            const selectedId = parseInt(this.value);
            const selected = carsData.find(c => c.id === selectedId);
            if (selected) {
                currentSelectedCar = selected;
                updatePriceCalculation();
            }
        });
    }
    
    const durasiSelect = document.getElementById("durasiSelect");
    if (durasiSelect) {
        durasiSelect.addEventListener("change", function() {
            currentDurasi = this.value;
            updatePriceCalculation();
        });
    }
    
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => navLinks.classList.remove("active"));
        });
    }
    
    window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 50) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });
}

function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    const toastIcon = toast.querySelector("i");
    
    toastMessage.innerText = message;
    toastIcon.className = isError ? "fas fa-exclamation-circle" : "fas fa-check-circle";
    toastIcon.style.color = isError ? "#ef4444" : "#10b981";
    
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
}

function setDefaultDates() {
    const today = new Date().toISOString().split('T')[0];
    const tglInput = document.getElementById("tglSewa");
    if (tglInput) tglInput.value = today;
    
    const jamInput = document.getElementById("jamPenjemputan");
    if (jamInput) jamInput.value = "08:00";
}

function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
            setTimeout(() => preloader.style.display = "none", 500);
        }, 1500);
    }
}

function initAOS() {
    AOS.init({ duration: 800, once: true, offset: 100 });
}

// ========== MAIN INIT ==========
document.addEventListener("DOMContentLoaded", function() {
    renderPricelist();
    renderCars();
    updateMobilSelect(1);
    setupUpload();
    setupEventListeners();
    setDefaultDates();
    updatePriceCalculation();
    setupLanguageSwitcher();
    initAOS();
    initPreloader();
    
    currentSelectedCar = carsData[0];
    currentDurasi = "12";
    updatePriceCalculation();
});