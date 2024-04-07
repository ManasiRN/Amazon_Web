function Registration()
{
var name =
document.forms.RegForm.Name.value;
var email =
document.forms.RegForm.EMail.value;
var phone =
document.forms.RegForm.MobileNumber.value;
var gender =
document.forms.RegForm.Gender.value;
var favoritecolor =
document.forms.RegForm.FavoriteColor.value;
// Javascript reGex for Name validation
var regName = /\d+$/g;
//Javascript reGex for Email Validation.
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
// Javascript reGex for Phone Number validation.
var regPhone=/^\d{10}$/;
}