document.addEventListener('navbar:ready', () => {
  // aquí ya EXISTE el navbar en el DOM
  const input = document.getElementById('searchInput');
  if (input) {
    // tus listeners o lógica de búsqueda
  }
});




console.log("✅ script.js cargado correctamente");

// ==============================================
// SISTEMA DE SUGERENCIAS DE BÚSQUEDA - SIMPLIFICADO
// ==============================================
function initSearchSuggestions() {
    console.log("🔄 Iniciando sistema de sugerencias...");
    
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    
    console.log("Input encontrado:", searchInput);
    console.log("Container encontrado:", suggestionsContainer);
    
    if (!searchInput || !suggestionsContainer) {
        console.error("❌ No se encontraron elementos de búsqueda");
        return;
    }
    
    const sugerencias = [
        'Camisetas de fútbol', 
        'Zapatillas deportivas',
        'Shorts de baloncesto',
        'Guantes de portería',
        'Balones de fútbol',
        'Tacos de fútbol',
        'Camiseta Man United',
        'Camiseta Portugal'
    ];

    searchInput.addEventListener('input', function(e) {
        const value = e.target.value.trim().toLowerCase();
        console.log("📝 Usuario escribió:", value);
        
        if (value.length < 1) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        const sugerenciasFiltradas = sugerencias.filter(sugerencia => 
            sugerencia.toLowerCase().includes(value)
        );
        
        console.log("🎯 Sugerencias encontradas:", sugerenciasFiltradas);
        
        if (sugerenciasFiltradas.length > 0) {
            // Mostrar sugerencias
            suggestionsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'block';
            
            sugerenciasFiltradas.forEach(sugerencia => {
                const div = document.createElement('div');
                div.textContent = sugerencia;
                div.className = 'suggestion-item';
                
                // Efecto hover
                div.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#f8f9fa';
                });
                
                div.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'white';
                });
                
                // Al hacer clic
                div.addEventListener('click', function() {
                    searchInput.value = sugerencia;
                    suggestionsContainer.style.display = 'none';
                    searchInput.focus();
                });
                
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
    
    // Ocultar sugerencias al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

// ==============================================
// VALIDACIÓN FORMULARIO DE CONTACTO
// ==============================================
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            let isValid = true;
            
            // Validar nombre
            if (nombre === '' || nombre.split(' ').length < 2) {
                showError('nombre', '⚠️ Ingresa nombre y apellido');
                isValid = false;
            } else {
                clearError('nombre');
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('email', '⚠️ Ingresa un email válido');
                isValid = false;
            } else {
                clearError('email');
            }
            
            // Validar mensaje
            if (mensaje.length < 10) {
                showError('mensaje', '⚠️ Mínimo 10 caracteres');
                isValid = false;
            } else {
                clearError('mensaje');
            }
            
            if (isValid) {
                alert('✅ ¡Formulario enviado correctamente!');
                this.reset();
            }
        });
    }
}

// ==============================================
// FUNCIONES AUXILIARES
// ==============================================
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('is-invalid');
        
        let errorElement = document.getElementById(fieldId + 'Error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = fieldId + 'Error';
            errorElement.className = 'invalid-feedback';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.remove('is-invalid');
        
        const errorElement = document.getElementById(fieldId + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
}

// ==============================================
// INICIALIZAR TODO CUANDO LA PÁGINA CARGUE
// ==============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 DOM completamente cargado");
    initSearchSuggestions();
    initFormValidation();
    
    // Efectos hover para cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA88Qr3-gufOxNtdBvX9IOFEyPJIkcbmYU",
  authDomain: "zona-futbolera-fdd04.firebaseapp.com",
  projectId: "zona-futbolera-fdd04",
  storageBucket: "zona-futbolera-fdd04.firebasestorage.app",
  messagingSenderId: "439624699197",
  appId: "1:439624699197:web:0de5b8c94c2a8422650954",
  measurementId: "G-B8MBDBQE1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


if (signUpBtn) signUpBtn.addEventListener('click', async () => {
try {
await createUserWithEmailAndPassword(auth, email.value.trim(), pass.value.trim());
showStatusFor(statusEl, 'Cuenta creada y sesión iniciada ✅', true);
} catch (e) { showStatusFor(statusEl, mapAuthError(e)); }
});


if (signInBtn) signInBtn.addEventListener('click', async () => {
try {
await signInWithEmailAndPassword(auth, email.value.trim(), pass.value.trim());
showStatusFor(statusEl, 'Inicio de sesión correcto ✅', true);
} catch (e) { showStatusFor(statusEl, mapAuthError(e)); }
});


if (googleBtn) googleBtn.addEventListener('click', async () => {
try {
await signInWithPopup(auth, new GoogleAuthProvider());
showStatusFor(statusEl, 'Sesión con Google ✅', true);
} catch (e) { showStatusFor(statusEl, mapAuthError(e)); }
});


if (signOutBtn) signOutBtn.addEventListener('click', async () => {
await signOut(auth);
showStatusFor(statusEl, 'Sesión cerrada.👋', true);
});


// Activar UI del modal
wireAuthUI('-m');


// Sincronizar bloque protegido del modal
onAuthStateChanged(auth, (user) => {
const box = $id('protected-m');
const tag = $id('userEmail-m');
const stat = $id('status-m');
if (!box) return;
if (user) {
box.classList.remove('d-none');
if (tag) tag.textContent = user.email || 'sin correo';
if (stat) { stat.textContent = ''; stat.className = ''; }
} else {
box.classList.add('d-none');
}
});


function mapAuthError(e){
const code = (e && e.code) || '';
switch(code){
case 'auth/invalid-email': return 'Correo inválido';
case 'auth/missing-password': return 'Ingresa una contraseña';
case 'auth/weak-password': return 'La contraseña debe tener al menos 6 caracteres';
case 'auth/email-already-in-use': return 'Ese correo ya está registrado';
case 'auth/user-not-found':
case 'auth/wrong-password': return 'Correo o contraseña incorrectos';
case 'auth/popup-closed-by-user': return 'Se cerró la ventana. Intenta de nuevo';
default: return code ? `Error: ${code}` : 'Ocurrió un error';
}
}

// --- Carrito simple con localStorage ---
const CART_KEY = 'zf_cart';

function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { return []; } }
function setCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); actualizarBadgeCarrito(); }

function actualizarBadgeCarrito(){
  const badge = document.getElementById('badgeCarrito');
  if (!badge) return;
  const total = getCart().reduce((a, it) => a + it.qty, 0);
  badge.textContent = total;
}

// Botón "Agregar al carrito"
function agregarAlCarrito(btn){
  const id    = Number(btn.dataset.id);
  const name  = btn.dataset.name;
  const price = Number(btn.dataset.price);
  const cart = getCart();
  const idx = cart.findIndex(it => it.id === id);
  if (idx >= 0) cart[idx].qty++;
  else cart.push({ id, name, price, qty: 1 });
  setCart(cart);
}

// Cuando el navbar se haya inyectado, refrescar badge
document.addEventListener('navbar:ready', actualizarBadgeCarrito);
// Por si se recarga sin evento (fallback)
document.addEventListener('DOMContentLoaded', actualizarBadgeCarrito);
