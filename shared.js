
const $=id=>document.getElementById(id);
const PORTAL=document.body.dataset.portal;
/* Edit these if the three portals are hosted somewhere else */
const LINKS={user:'../ecobin-user/index.html',supplier:'../ecobin-supplier/index.html',admin:'../ecobin-admin/index.html'};

const T = {
            en: {
                loading: "Loading EcoBin...",
                brand: "EcoBin",
                nav_home: "Home", nav_dashboard: "Dashboard", nav_bins: "Smart Bins",
                nav_suppliers: "Suppliers", nav_rewards: "Rewards", nav_impact: "Impact",
                hero_badge: "Smart Eco-Tourism Initiative",
                hero_title: "Recycle Today,<br><span>Travel Greener</span>",
                hero_desc: "Join our smart waste management ecosystem. Scan the QR code on any EcoBin, recycle your waste, earn Green Points, and redeem exclusive eco-rewards.",
                stat_recycled: "kg Recycled", stat_users: "Active Users", stat_points: "Points Earned",
                btn_dashboard: "View Dashboard", btn_bins: "Find Bins",
                dash_badge: "Live Analytics", dash_title: "Platform Dashboard",
                dash_desc: "Real-time monitoring of waste collection and environmental impact.",
                card_total: "Total Waste Collected", card_users: "Active Tourists",
                card_points: "Green Points", card_carbon: "CO₂ Offset",
                card_bins: "Smart Bins Active", card_suppliers: "Active Suppliers",
                this_month: "this month", this_week: "this week", uptime: "uptime", new_this_week: "new this week",
                bins_badge: "IoT Connected", bins_title: "Smart Bin Network",
                bins_desc: "AI-powered waste bins with real-time fill monitoring and automatic sorting.",
                split_badge: "Supply Chain", split_title: "Suppliers & Orders",
                split_desc: "Connect with verified recycling suppliers and manage orders.",
                supplier_title: "Recycling Suppliers", orders_title: "My Orders",
                th_supplier: "Supplier", th_material: "Material", th_qty: "Available", th_price: "Price", th_action: "Action",
                rewards_badge: "Redeem Now", rewards_title: "Green Points Rewards",
                rewards_desc: "Turn your recycling efforts into amazing rewards. You have <strong style='color:var(--dark-green)'>1,250 Green Points</strong> available.",
                impact_badge: "Your Impact", impact_title: "Environmental Impact",
                impact_desc: "See how your recycling makes a real difference.",
                impact_plastic: "Plastic Recycled", impact_glass: "Glass Recycled",
                impact_metal: "Metal Recycled", impact_energy: "Energy Saved",
                impact_chart_title: "Weekly Recycling Activity",
                footer_desc: "Revolutionizing eco-tourism through smart waste management.",
                footer_platform: "Platform", footer_company: "Company", footer_connect: "Connect",
                footer_dash: "Dashboard", footer_bins: "Smart Bins", footer_suppliers: "Suppliers", footer_rewards: "Rewards",
                footer_about: "About Us", footer_sustain: "Sustainability", footer_partners: "Partners", footer_contact: "Contact",
                rights: "All rights reserved.", built_with: "Built with", for_planet: "for a greener planet.",
                order_placed: "Order Placed", order_success: "Ordered {qty}kg of {material} from {supplier}",
                reward_redeemed: "Reward Redeemed", reward_success: "Redeemed: {title}! Points left: {points}",
                fill_level: "Fill Level", temp: "Temp", last_scan: "Last scan",
                plastic_kg: "Plastic kg", glass_kg: "Glass kg", metal_kg: "Metal kg",
                active: "Active", warning: "Warning", maintenance: "Maintenance",
                pending: "Pending", processing: "Processing", completed: "Completed",
                ordered: "Ordered", order: "Order", need_more: "Need More", redeem: "Redeem",
                supplier: "Supplier", material: "Material", quantity: "Qty", total: "Total", date: "Date", progress: "Progress",
                points: "Points", available: "Available", low: "Low", critical: "Critical",
                lang_changed: "Language Changed", lang_ar: "Switched to Arabic", lang_en: "Switched to English",
                coming_soon: "Coming Soon", mobile_menu: "Mobile menu coming soon!"
            },
            ar: {
                loading: "جاري تحميل إيكوبين...",
                brand: "إيكوبين",
                nav_home: "الرئيسية", nav_dashboard: "لوحة التحكم", nav_bins: "السلال الذكية",
                nav_suppliers: "الموردين", nav_rewards: "المكافآت", nav_impact: "التأثير البيئي",
                hero_badge: "مبادرة السياحة البيئية الذكية",
                hero_title: "أعد التدوير اليوم،<br><span>سافر بشكل أخضر</span>",
                hero_desc: "انضم إلى نظامنا البيئي الذكي. امسح رمز QR على أي سلة، أعد تدوير نفاياتك، اجمع النقاط الخضراء، واستبدلها بمكافآت.",
                stat_recycled: "كجم تم تدويرها", stat_users: "مستخدم نشط", stat_points: "نقطة تم جمعها",
                btn_dashboard: "عرض لوحة التحكم", btn_bins: "العثور على السلال",
                dash_badge: "تحليلات مباشرة", dash_title: "لوحة تحكم المنصة",
                dash_desc: "مراقبة مباشرة لجمع النفايات والتأثير البيئي.",
                card_total: "إجمالي النفايات المجمعة", card_users: "السياح النشطين",
                card_points: "النقاط الخضراء", card_carbon: "تعويض ثاني أكسيد الكربون",
                card_bins: "السلال الذكية النشطة", card_suppliers: "الموردين النشطين",
                this_month: "هذا الشهر", this_week: "هذا الأسبوع", uptime: "وقت التشغيل", new_this_week: "جديد هذا الأسبوع",
                bins_badge: "متصل بالإنترنت", bins_title: "شبكة السلال الذكية",
                bins_desc: "سلال نفايات مدعومة بالذكاء الاصطناعي مع مراقبة مستوى التعبئة في الوقت الفعلي.",
                split_badge: "سلسلة التوريد", split_title: "الموردين والطلبات",
                split_desc: "تواصل مع موردي إعادة التدوير المعتمدين وإدارة الطلبات.",
                supplier_title: "موردي إعادة التدوير", orders_title: "طلباتي",
                th_supplier: "المورد", th_material: "المادة", th_qty: "المتاح", th_price: "السعر", th_action: "الإجراء",
                rewards_badge: "استبدل الآن", rewards_title: "مكافآت النقاط الخضراء",
                rewards_desc: "حوّل جهود إعادة التدوير إلى مكافآت رائعة. لديك <strong style='color:var(--dark-green)'>1,250 نقطة خضراء</strong> متاحة.",
                impact_badge: "تأثيرك", impact_title: "التأثير البيئي",
                impact_desc: "شاهد كيف يساهم إعادة التدوير في إحداث فرق حقيقي.",
                impact_plastic: "البلاستيك المُعاد تدويره", impact_glass: "الزجاج المُعاد تدويره",
                impact_metal: "المعدن المُعاد تدويره", impact_energy: "الطاقة الموفرة",
                impact_chart_title: "نشاط إعادة التدوير الأسبوعي",
                footer_desc: "إحداث ثورة في السياحة البيئية من خلال إدارة النفايات الذكية.",
                footer_platform: "المنصة", footer_company: "الشركة", footer_connect: "تواصل معنا",
                footer_dash: "لوحة التحكم", footer_bins: "السلال الذكية", footer_suppliers: "الموردين", footer_rewards: "المكافآت",
                footer_about: "من نحن", footer_sustain: "الاستدامة", footer_partners: "الشركاء", footer_contact: "اتصل بنا",
                rights: "جميع الحقوق محفوظة.", built_with: "مبني بـ", for_planet: "لكوكب أكثر خضرة.",
                order_placed: "تم تقديم الطلب", order_success: "تم طلب {qty} كجم من {material} من {supplier} بنجاح",
                reward_redeemed: "تم استبدال المكافأة", reward_success: "تم استبدال: {title}! النقاط المتبقية: {points}",
                fill_level: "مستوى التعبئة", temp: "الحرارة", last_scan: "آخر مسح",
                plastic_kg: "بلاستيك كجم", glass_kg: "زجاج كجم", metal_kg: "معدن كجم",
                active: "نشط", warning: "تحذير", maintenance: "صيانة",
                pending: "قيد الانتظار", processing: "قيد المعالجة", completed: "مكتمل",
                ordered: "تم الطلب", order: "اطلب", need_more: "نقاط غير كافية", redeem: "استبدل",
                supplier: "المورد", material: "المادة", quantity: "الكمية", total: "الإجمالي", date: "التاريخ", progress: "التقدم",
                points: "نقطة", available: "متاح", low: "منخفض", critical: "حرج",
                lang_changed: "تم تغيير اللغة", lang_ar: "تم التبديل إلى العربية", lang_en: "تم التبديل إلى الإنجليزية",
                coming_soon: "قريباً", mobile_menu: "القائمة المتنقلة قريباً!"
            }
        };

(()=>{const X={
nav_store:['Store','المتجر'],nav_cart:['Cart','السلة'],nav_products:['Products','المنتجات'],nav_orders:['Orders','الطلبات'],
portal_user:['Tourist','السائح'],portal_supplier:['Supplier','المورد'],portal_admin:['Admin','المدير'],
btn_shop:['Shop Recycled','تسوق المنتجات'],store_badge:['Recycled Products','منتجات معاد تدويرها'],
store_title:['Recycled Products Store','متجر المنتجات المعاد تدويرها'],
store_desc:['Buy goods made from plastic, glass and metal collected by EcoBin.','اشترِ منتجات مصنوعة من البلاستيك والزجاج والمعدن الذي جمعته إيكوبين.'],
search:['Search products…','ابحث عن منتج…'],all:['All','الكل'],plastic:['Plastic','بلاستيك'],glass:['Glass','زجاج'],metal:['Metal','معدن'],
add_cart:['Add to Cart','أضف إلى السلة'],sold_out:['Sold out','نفد'],in_stock:['in stock','متوفر'],
no_products:['No products match your search.','لا توجد منتجات مطابقة.'],
added_cart:['Added to cart','تمت الإضافة إلى السلة'],stock_limit:['Stock limit reached','وصلت للحد الأقصى للمخزون'],
cart_title:['Your Cart','سلة التسوق'],cart_desc:['Review items, then place your order. Suppliers are notified instantly.','راجع المنتجات ثم أتمم الطلب. يصل الطلب للمورد فوراً.'],
cart_empty:['Your cart is empty.','السلة فارغة.'],subtotal:['Subtotal','المجموع الفرعي'],
use_points:['Use {n} Green Points to save ${d}','استخدم {n} نقطة خضراء لتوفير ${d}'],
checkout:['Place order','إتمام الطلب'],order_done:['Order placed','تم إرسال الطلب'],order_done_msg:['Suppliers were notified.','تم إشعار الموردين.'],
my_store_orders:['My Store Orders','طلبات المتجر'],no_orders:['No orders yet.','لا توجد طلبات بعد.'],
shipped:['Shipped','تم الشحن'],cancelled:['Cancelled','ملغي'],
sup_title:['Supplier Portal','بوابة المورد'],sup_desc:['Manage your recycled products and fulfil customer orders.','أدر منتجاتك وطلبات العملاء.'],
sup_as:['Signed in as','الدخول باسم'],products_n:['Products','المنتجات'],pending_n:['New orders','طلبات جديدة'],revenue:['Revenue','الإيرادات'],
live:['Live','منشور'],review:['In review','قيد المراجعة'],blocked:['Blocked','محظور'],
accept:['Accept','قبول'],ship:['Ship','شحن'],complete:['Complete','إكمال'],decline:['Decline','رفض'],
submit_review:['Submit for review','إرسال للمراجعة'],fill_all:['Fill in name, price and stock','أدخل الاسم والسعر والمخزون'],
product_added:['Sent to admin for review','أُرسل للمراجعة'],th_product:['Product','المنتج'],th_status:['Status','الحالة'],add_prod:['Add a product','إضافة منتج'],
mod_title:['Store Management','إدارة المتجر'],all_orders:['All Store Orders','كل طلبات المتجر'],
approve:['Approve','موافقة'],block:['Block','حظر'],unblock:['Unblock','إلغاء الحظر'],
orders_title:['Material Orders','طلبات المواد']
};for(const k in X){T.en[k]=X[k][0];T.ar[k]=X[k][1]}})();

let currentLang='en';try{currentLang=localStorage.getItem('ecobin_lang')||'en'}catch(e){}
let userPoints=1250,orderCounter=6;
// ===== DATA =====
        const binsData = [
            { id: 'BIN-001', location: { en: 'Pyramids of Giza', ar: 'أهرامات الجيزة' }, status: 'Active', fillLevel: 72, plastic: 45, glass: 30, metal: 25, temp: 28 },
            { id: 'BIN-002', location: { en: 'Karnak Temple', ar: 'معبد الكرنك' }, status: 'Active', fillLevel: 45, plastic: 20, glass: 15, metal: 10, temp: 32 },
            { id: 'BIN-003', location: { en: 'Luxor Temple', ar: 'معبد الأقصر' }, status: 'Warning', fillLevel: 88, plastic: 55, glass: 40, metal: 35, temp: 30 },
            { id: 'BIN-004', location: { en: 'Abu Simbel', ar: 'أبو سمبل' }, status: 'Active', fillLevel: 35, plastic: 15, glass: 10, metal: 10, temp: 35 },
            { id: 'BIN-005', location: { en: 'Alexandria Library', ar: 'مكتبة الإسكندرية' }, status: 'Active', fillLevel: 58, plastic: 30, glass: 20, metal: 18, temp: 26 },
            { id: 'BIN-006', location: { en: 'Siwa Oasis', ar: 'واحة سيوة' }, status: 'Maintenance', fillLevel: 0, plastic: 0, glass: 0, metal: 0, temp: 38 }
        ];

        const suppliersData = [
            { id: 1, name: { en: 'GreenCycle Egypt', ar: 'جرين سايكل مصر' }, type: { en: 'Plastic Recycling', ar: 'إعادة تدوير البلاستيك' }, material: 'Plastic', available: 2500, price: 8.5, color: '#3B82F6', avatar: 'GC' },
            { id: 2, name: { en: 'GlassWorks Cairo', ar: 'جلاس وركس القاهرة' }, type: { en: 'Glass Processing', ar: 'معالجة الزجاج' }, material: 'Glass', available: 1800, price: 5.2, color: '#10B981', avatar: 'GW' },
            { id: 3, name: { en: 'MetalForge Co.', ar: 'ميتال فورج' }, type: { en: 'Metal Recycling', ar: 'إعادة تدوير المعدن' }, material: 'Metal', available: 1200, price: 12.8, color: '#F59E0B', avatar: 'MF' },
            { id: 4, name: { en: 'EcoPlast Industries', ar: 'إيكوبلاست' }, type: { en: 'Plastic Recycling', ar: 'إعادة تدوير البلاستيك' }, material: 'Plastic', available: 3200, price: 7.9, color: '#3B82F6', avatar: 'EP' },
            { id: 5, name: { en: 'Crystal Glass Co.', ar: 'كريستال جلاس' }, type: { en: 'Glass Processing', ar: 'معالجة الزجاج' }, material: 'Glass', available: 950, price: 6.1, color: '#10B981', avatar: 'CG' },
            { id: 6, name: { en: 'SteelRecycle Ltd.', ar: 'ستيل ريسايكل' }, type: { en: 'Metal Recycling', ar: 'إعادة تدوير المعدن' }, material: 'Metal', available: 800, price: 14.2, color: '#F59E0B', avatar: 'SR' }
        ];

        let ordersData = [
            { id: 'ORD-001', supplier: { en: 'GreenCycle Egypt', ar: 'جرين سايكل مصر' }, material: 'Plastic', qty: 500, status: 'completed', progress: 100, date: '2026-07-05', total: 4250 },
            { id: 'ORD-002', supplier: { en: 'GlassWorks Cairo', ar: 'جلاس وركس القاهرة' }, material: 'Glass', qty: 300, status: 'processing', progress: 65, date: '2026-07-08', total: 1560 },
            { id: 'ORD-003', supplier: { en: 'MetalForge Co.', ar: 'ميتال فورج' }, material: 'Metal', qty: 200, status: 'pending', progress: 25, date: '2026-07-10', total: 2560 },
            { id: 'ORD-004', supplier: { en: 'EcoPlast Industries', ar: 'إيكوبلاست' }, material: 'Plastic', qty: 800, status: 'processing', progress: 45, date: '2026-07-09', total: 6320 },
            { id: 'ORD-005', supplier: { en: 'Crystal Glass Co.', ar: 'كريستال جلاس' }, material: 'Glass', qty: 150, status: 'pending', progress: 10, date: '2026-07-11', total: 915 }
        ];

        const rewardsData = [
            { id: 1, title: { en: 'Pyramids Entry Discount', ar: 'خصم دخول الأهرامات' }, desc: { en: 'Get 20% off your next visit to the Pyramids', ar: 'احصل على خصم 20% على زيارتك القادمة للأهرامات' }, points: 500, icon: '🏛️', color: '#FEF3C7' },
            { id: 2, title: { en: 'Nile Cruise Voucher', ar: 'قسيمة رحلة نيلية' }, desc: { en: 'Free sunset cruise on the Nile for 2 people', ar: 'رحلة غروب مجانية على النيل لشخصين' }, points: 2000, icon: '🚢', color: '#DBEAFE' },
            { id: 3, title: { en: 'Eco Souvenir Pack', ar: 'حزمة هدايا بيئية' }, desc: { en: 'Handcrafted sustainable souvenirs', ar: 'هدايا يدوية مستدامة من الحرفيين' }, points: 800, icon: '🎁', color: '#D1FAE5' },
            { id: 4, title: { en: 'Desert Safari Tour', ar: 'جولة سفاري صحراوية' }, desc: { en: 'Full-day eco-friendly desert safari', ar: 'جولة سفاري صحراوية صديقة للبيئة ليوم كامل' }, points: 3500, icon: '🐪', color: '#FEF3C7' },
            { id: 5, title: { en: 'Local Restaurant Meal', ar: 'وجبة مطعم محلي' }, desc: { en: 'Traditional Egyptian meal at eco-restaurant', ar: 'وجبة مصرية تقليدية في مطعم بيئي' }, points: 1200, icon: '🍽️', color: '#FEE2E2' },
            { id: 6, title: { en: 'Museum Pass', ar: 'تذكرة المتحف' }, desc: { en: 'Free entry to Egyptian Museum with guide', ar: 'دخول مجاني للمتحف المصري مع دليل' }, points: 1500, icon: '🏺', color: '#EDE9FE' }
        ];

        
/* ===== SHARED STORE (products, cart, orders, points) - same data in all 3 portals ===== */
const P=(id,sid,en,ar,m,price,stock,icon,color,st)=>({id,sid,name:{en,ar},material:m,price,stock,icon,color,st:st||'live'});
const SEED=[
P(1,1,'Recycled PET Water Bottle','زجاجة مياه من البلاستيك المعاد تدويره','Plastic',6.5,40,'🧴','#DBEAFE'),
P(2,4,'Recycled Plastic Plant Pot','أصيص نباتات من البلاستيك المعاد تدويره','Plastic',4.9,60,'🪴','#DBEAFE'),
P(3,2,'Recycled Glass Tumbler','كوب زجاج معاد تدويره','Glass',5.5,35,'🥛','#D1FAE5'),
P(4,5,'Glass Bead Necklace','قلادة خرز زجاجي','Glass',9,25,'📿','#D1FAE5'),
P(5,2,'Glass Candle Jar','برطمان شمع زجاجي','Glass',7.2,30,'🕯️','#D1FAE5'),
P(6,3,'Upcycled Metal Desk Lamp','مصباح مكتب من المعدن المعاد تدويره','Metal',24,12,'💡','#FEF3C7'),
P(7,6,'Recycled Steel Flask','قارورة ستانلس معاد تدويرها','Metal',15.5,20,'🍶','#FEF3C7'),
P(8,1,'Eco Tote Bag (recycled PET)','حقيبة قماشية من البلاستيك المعاد تدويره','Plastic',8,50,'👜','#DBEAFE'),
P(9,3,'Metal Wind Chime','جرس رياح معدني','Metal',11,15,'🎐','#FEF3C7','review')];
const KEY='ecobin_db_v1';let mem=null;
const dbLoad=()=>{try{const r=localStorage.getItem(KEY);if(r)return JSON.parse(r)}catch(e){}return mem};
const DB=dbLoad()||{points:1250,cart:[],orders:[],n:1,products:SEED};
function save(){try{localStorage.setItem(KEY,JSON.stringify(DB))}catch(e){}mem=JSON.parse(JSON.stringify(DB))}
function sync(){const d=dbLoad();if(d)Object.assign(DB,d);userPoints=DB.points}
sync();
addEventListener('storage',e=>{if(e.key===KEY){sync();renderAll()}});

const pn=p=>p.name[currentLang]||p.name.en;
const sup=id=>suppliersData.find(s=>s.id===id);
const money=n=>'$'+n.toFixed(2);
const cartN=()=>DB.cart.reduce((a,c)=>a+c.qty,0);
const PROG={pending:10,processing:40,shipped:75,completed:100,cancelled:0};
const CLS={pending:'pend',processing:'proc',shipped:'ship',completed:'comp',cancelled:'canc'};
const stCls=s=>s==='live'?'ok':s==='review'?'low':'crit';

function t(key,p={}){let txt=T[currentLang][key]||T.en[key]||key;Object.keys(p).forEach(k=>txt=txt.replace('{'+k+'}',p[k]));return txt}
function showToast(title,msg){const c=$('toastWrap'),e=document.createElement('div');e.className='toast';
 e.innerHTML=`<div class="toast-ic">✓</div><div class="toast-txt"><h4>${title}</h4><p>${msg}</p></div>`;c.appendChild(e);
 setTimeout(()=>e.classList.add('show'),10);setTimeout(()=>{e.classList.remove('show');setTimeout(()=>e.remove(),350)},3500)}

function renderBins() {
            document.getElementById('binsGrid').innerHTML = binsData.map(bin => {
                const sc = bin.status === 'Active' ? '#10B981' : bin.status === 'Warning' ? '#F59E0B' : '#EF4444';
                const fc = bin.fillLevel > 80 ? 'mt' : bin.fillLevel > 50 ? 'mt' : 'gl';
                const loc = bin.location[currentLang];
                return `<div class="bin-card fade-in visible">
                    <div class="bin-head">
                        <div><div class="bin-loc">${loc}</div><div style="font-size:0.75rem;opacity:0.75;margin-top:2px;">${bin.id}</div></div>
                        <span class="bin-stat" style="background:${sc}20;color:${sc};border:1px solid ${sc}30;">${t(bin.status.toLowerCase())}</span>
                    </div>
                    <div class="bin-body">
                        <div class="bin-visual">
                            <div class="bin-mini"><div class="bin-mini-f ${fc}" style="height:${bin.fillLevel}%"></div></div>
                        </div>
                        <div class="bin-metrics">
                            <div class="bin-m"><div class="bin-mv">${bin.plastic}</div><div class="bin-ml">${t('plastic_kg')}</div></div>
                            <div class="bin-m"><div class="bin-mv">${bin.glass}</div><div class="bin-ml">${t('glass_kg')}</div></div>
                            <div class="bin-m"><div class="bin-mv">${bin.metal}</div><div class="bin-ml">${t('metal_kg')}</div></div>
                        </div>
                        <div class="prog">
                            <div class="prog-l"><span>${t('fill_level')}</span><span>${bin.fillLevel}%</span></div>
                            <div class="prog-b"><div class="prog-f ${fc}" style="width:${bin.fillLevel}%"></div></div>
                        </div>
                        <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:0.8rem;color:var(--text-muted);">
                            <span>🌡 ${bin.temp}°C</span>
                        </div>
                    </div>
                </div>`;
            }).join('');
        }

        function renderSuppliers() {
            document.getElementById('suppliersTable').innerHTML = suppliersData.map(sup => {
                const qc = sup.available > 2000 ? 'ok' : sup.available > 1000 ? 'low' : 'crit';
                const isOrd = ordersData.some(o => o.supplier.en === sup.name.en && o.status !== 'completed');
                const nm = sup.name[currentLang];
                const tp = sup.type[currentLang];
                return `<tr>
                    <td><div class="sup-info"><div class="sup-av" style="background:${sup.color}">${sup.avatar}</div><div><div class="sup-n">${nm}</div><div class="sup-t">${tp}</div></div></div></td>
                    <td><span style="color:${sup.color};font-weight:600;">${t(sup.material.toLowerCase())}</span></td>
                    <td><span class="qty-b ${qc}">${sup.available.toLocaleString()} kg</span></td>
                    <td style="font-weight:700;">$${sup.price.toFixed(2)}</td>
                    <td><button class="act-btn ${isOrd ? 'done' : 'ord'}" ${isOrd ? 'disabled' : `onclick="placeOrder(${sup.id})"`}>${isOrd ? '✓ ' + t('ordered') : t('order')}</button></td>
                </tr>`;
            }).join('');
        }

        function renderOrders() {
            document.getElementById('orderCount').textContent = `${ordersData.length} ${t('orders_title')}`;
            document.getElementById('ordersList').innerHTML = ordersData.map(o => {
                const sup = o.supplier[currentLang];
                return `<div class="ord-card">
                    <div class="ord-h"><div class="ord-id">${o.id}</div><span class="ord-st ${o.status === 'pending' ? 'pend' : o.status === 'processing' ? 'proc' : 'comp'}">${t(o.status)}</span></div>
                    <div class="ord-dets"><div>${t('supplier')}: <span>${sup}</span></div><div>${t('material')}: <span>${t(o.material.toLowerCase())}</span></div><div>${t('quantity')}: <span>${o.qty} kg</span></div><div>${t('total')}: <span>$${o.total.toLocaleString()}</span></div></div>
                    <div class="ord-prog"><div class="ord-prog-b"><div class="ord-prog-f" style="width:${o.progress}%"></div></div><span class="ord-prog-t">${o.progress}%</span></div>
                    <div style="margin-top:6px;font-size:0.75rem;color:var(--text-muted);">📅 ${o.date}</div>
                </div>`;
            }).join('');
        }

        function renderRewards() {
            document.getElementById('rewardsGrid').innerHTML = rewardsData.map(rw => {
                const can = userPoints >= rw.points;
                const tit = rw.title[currentLang];
                const dsc = rw.desc[currentLang];
                return `<div class="rew-card fade-in visible">
                    <div class="rew-img" style="background:linear-gradient(135deg,${rw.color},white);">${rw.icon}</div>
                    <div class="rew-body">
                        <div class="rew-title">${tit}</div>
                        <div class="rew-desc">${dsc}</div>
                        <div class="rew-pts"><span class="pts-tag">🌿 ${rw.points.toLocaleString()} ${t('points')}</span><button class="rew-btn" ${!can ? 'disabled' : ''} onclick="redeemReward(${rw.id})">${can ? t('redeem') : t('need_more')}</button></div>
                    </div>
                </div>`;
            }).join('');
        }

        function renderImpactChart() {
            const days = currentLang === 'ar' ? ['الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت','الأحد'] : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
            const data = [
                { pl: 30, gl: 20, mt: 15 }, { pl: 40, gl: 25, mt: 18 }, { pl: 35, gl: 22, mt: 16 },
                { pl: 50, gl: 30, mt: 22 }, { pl: 55, gl: 35, mt: 25 }, { pl: 60, gl: 40, mt: 28 }, { pl: 75, gl: 50, mt: 35 }
            ];
            document.getElementById('impactChart').innerHTML = days.map((d, i) => `
                <div class="chart-col">
                    <div class="chart-bars">
                        <div class="c-bar pl" style="height:${data[i].pl}%"></div>
                        <div class="c-bar gl" style="height:${data[i].gl}%"></div>
                        <div class="c-bar mt" style="height:${data[i].mt}%"></div>
                    </div>
                    <div class="chart-label">${d}</div>
                </div>
            `).join('');
        }

        
function placeOrder(sid) {
            const sup = suppliersData.find(s => s.id === sid);
            if (!sup) return;
            const q = Math.min(500, sup.available);
            ordersData.unshift({ id: `ORD-${String(orderCounter).padStart(3,'0')}`, supplier: sup.name, material: sup.material, qty: q, status: 'pending', progress: 0, date: new Date().toISOString().split('T')[0], total: Math.round(q * sup.price) });
            orderCounter++;
            sup.available -= q;
            renderSuppliers();
            renderOrders();
            showToast(t('order_placed'), t('order_success', { qty: q, material: t(sup.material.toLowerCase()), supplier: sup.name[currentLang] }));
        }

function orderCard(o,act=''){return `<div class="ord-card"><div class="ord-h"><div class="ord-id">${o.id}</div><span class="ord-st ${CLS[o.status]}">${t(o.status)}</span></div>
<div class="ord-dets"><div>${t('supplier')}: <span>${sup(o.sid).name[currentLang]}</span></div><div>${t('total')}: <span>${money(o.total)}</span></div>
<div style="grid-column:1/-1">${o.items.map(i=>`${i.icon} ${i.name[currentLang]||i.name.en} ×${i.qty}`).join(' · ')}</div></div>
<div class="ord-prog"><div class="ord-prog-b"><div class="ord-prog-f" style="width:${PROG[o.status]}%"></div></div><span class="ord-prog-t">${PROG[o.status]}%</span></div>
<div style="margin-top:8px;font-size:.75rem;color:var(--text-muted)">📅 ${o.date}</div>${act}</div>`}

/* ===== ACTIONS ===== */
function addToCart(id){sync();const p=DB.products.find(x=>x.id===id),l=DB.cart.find(c=>c.pid===id);
 if(!p||(l?l.qty:0)+1>p.stock)return showToast(t('stock_limit'),p?pn(p):'');
 l?l.qty++:DB.cart.push({pid:id,qty:1});save();showToast(t('added_cart'),pn(p));renderAll()}
function setQty(id,d){sync();const p=DB.products.find(x=>x.id===id),l=DB.cart.find(c=>c.pid===id);if(!l)return;
 l.qty=Math.min(l.qty+d,p?p.stock:l.qty);if(l.qty<=0)DB.cart=DB.cart.filter(c=>c.pid!==id);save();renderAll()}
function checkout(){sync();const g={};let sub=0;
 DB.cart.forEach(c=>{const p=DB.products.find(x=>x.id===c.pid);if(!p||c.qty>p.stock)return;
  (g[p.sid]=g[p.sid]||[]).push({pid:p.id,name:p.name,icon:p.icon,qty:c.qty,price:p.price});sub+=p.price*c.qty});
 if(!sub)return;const use=$('usePts')&&$('usePts').checked,disc=use?Math.min(sub,Math.floor(DB.points/100)):0;
 Object.entries(g).forEach(([sid,items])=>{const s=items.reduce((a,i)=>a+i.price*i.qty,0);
  items.forEach(i=>DB.products.find(x=>x.id===i.pid).stock-=i.qty);
  DB.orders.unshift({id:'ST-'+String(DB.n++).padStart(3,'0'),sid:+sid,items,total:+(s-disc*s/sub).toFixed(2),status:'pending',date:new Date().toISOString().slice(0,10)})});
 DB.points-=disc*100;DB.cart=[];save();sync();showToast(t('order_done'),t('order_done_msg'));renderAll()}
function setStatus(id,st){sync();const o=DB.orders.find(x=>x.id===id);if(!o)return;
 if(st==='cancelled')o.items.forEach(i=>{const p=DB.products.find(x=>x.id===i.pid);if(p)p.stock+=i.qty});
 o.status=st;save();renderAll()}
function setProd(id,f,v){sync();const p=DB.products.find(x=>x.id===id);if(p){p[f]=Math.max(0,+v||0);save();renderAll()}}
function setProdState(id,st){sync();const p=DB.products.find(x=>x.id===id);if(p){p.st=st;save();renderAll()}}
function redeemReward(rid){sync();const rw=rewardsData.find(r=>r.id===rid);if(!rw||DB.points<rw.points)return;
 DB.points-=rw.points;save();sync();showToast(t('reward_redeemed'),t('reward_success',{title:rw.title[currentLang],points:userPoints.toLocaleString()}));renderAll()}

/* ===== LAYOUT ===== */
const NAVS={user:[['index.html','nav_home'],['store.html','nav_store'],['cart.html','nav_cart'],['index.html#rewards','nav_rewards'],['index.html#impact','nav_impact']],
supplier:[['index.html','nav_home'],['index.html#products','nav_products'],['index.html#orders','nav_orders']],
admin:[['index.html','nav_dashboard'],['index.html#bins','nav_bins'],['index.html#suppliers','nav_suppliers'],['index.html#storeadmin','nav_store']]};
function nav(){const f=location.pathname.split('/').pop()||'index.html';
 $('navbar').innerHTML=`<a href="${LINKS[PORTAL]}" class="logo"><div class="logo-icon">♻</div><span>${t('brand')}</span></a>
<ul class="nav-links">${NAVS[PORTAL].map(([h,k])=>`<li><a href="${h}" class="${h===f?'active':''}">${t(k)}${k==='nav_cart'?`<span class="nbadge">${cartN()}</span>`:''}</a></li>`).join('')}</ul>
<div class="portals">${['user','supplier','admin'].map(p=>`<a href="${LINKS[p]}" class="${p===PORTAL?'on':''}">${t('portal_'+p)}</a>`).join('')}</div>
<div class="lang-switch"><button class="lang-btn ${currentLang==='en'?'active':''}" onclick="switchLang('en')">EN</button><button class="lang-btn ${currentLang==='ar'?'active':''}" onclick="switchLang('ar')">AR</button></div>`}
function foot(){$('foot').innerHTML=`<footer class="footer"><div class="foot-wrap"><div class="foot-brand"><a href="${LINKS[PORTAL]}" class="logo"><div class="logo-icon">♻</div><span data-i18n="brand"></span></a><p data-i18n="footer_desc"></p></div>
<div class="foot-links"><h4 data-i18n="footer_platform"></h4><ul>${['user','supplier','admin'].map(p=>`<li><a href="${LINKS[p]}" data-i18n="portal_${p}"></a></li>`).join('')}</ul></div></div>
<div class="foot-bot"><p>© 2026 EcoBin. <span data-i18n="rights"></span></p></div></footer>`}
function renderAll(){nav();
 document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');
  if(T[currentLang][k]){if(k==='hero_title'||k==='rewards_desc')el.innerHTML=T[currentLang][k];else el.textContent=T[currentLang][k]}});
 const rp=document.querySelector('.rewards-section .section-header p');if(rp)rp.innerHTML=rp.innerHTML.replace('1,250',userPoints.toLocaleString());
 [['binsGrid',renderBins],['suppliersTable',renderSuppliers],['ordersList',renderOrders],['rewardsGrid',renderRewards],['impactChart',renderImpactChart]].forEach(([i,f])=>$(i)&&f());
 if(typeof page==='function')page()}
function switchLang(l){currentLang=l;try{localStorage.setItem('ecobin_lang',l)}catch(e){}
 document.body.dir=l==='ar'?'rtl':'ltr';document.documentElement.lang=l;renderAll();showToast(t('lang_changed'),t(l==='ar'?'lang_ar':'lang_en'))}
function startLive(){setInterval(()=>{binsData.forEach(b=>{if(b.status!=='Maintenance')b.fillLevel=Math.max(0,Math.min(100,b.fillLevel+(Math.random()>.5?1:-1)))});
 if($('binsGrid'))renderBins()},5000)}
document.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>$('loadOverlay').classList.add('hide'),500);
 document.body.dir=currentLang==='ar'?'rtl':'ltr';foot();renderAll();
 const o=new IntersectionObserver(e=>e.forEach(n=>n.isIntersecting&&n.target.classList.add('visible')),{threshold:.1});
 document.querySelectorAll('.fade-in').forEach(x=>o.observe(x));
 addEventListener('scroll',()=>$('navbar').classList.toggle('scrolled',scrollY>50));startLive()});
