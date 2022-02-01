function validarDescripcionVacio() {
    inp = document.frm.taskRef;
    if (inp.value.trim().length == 0){
        alert('Debe ingresar una descripción')
        return false;
    }
    
    return true;
}