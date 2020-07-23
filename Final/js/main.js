let botonAcepta = document.getElementById("modalButtonOk");
let modalBody = document.getElementById('modalBody');

const aceptar = () => {
    modalBody.innerHTML = `
    <div class="d-flex w-100 align-items-center justify-content-center" style="height: 200px;">
        <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  `; 
  
  setTimeout(() => {
    modalBody.innerHTML = `
    <div class="d-flex w-100 align-items-center justify-content-center" style="height: 200px;">
        <i class="fas fa-check text-success display-2"></i>
    </div>
  `; 
  }, 1000);
}

botonAcepta.addEventListener('click', aceptar );