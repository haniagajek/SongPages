const arrow = document.querySelector(".arrow_iconhiden");
const navigation = document.querySelector(".navigationoff");
const arrowdiv = document.querySelector(".arrowhidden");
const settingsWindowOff = document.querySelector(".SettingsWindowOff");
const infoWindowOff = document.querySelector(".InfoWindowOff");
const ProfileWindowOff = document.querySelector(".ProfileWindowOff");

function navopen() {
  if (arrow.classList.contains("arrow_iconhiden")) {
    navigation.classList.remove("navigationoff");
    navigation.classList.add("navigation");
    arrow.classList.remove("arrow_iconhiden");
    arrow.classList.add("arrow_iconshown");
    arrowdiv.classList.remove("arrowhidden");
    arrowdiv.classList.add("arrowshown");
  } else {
    navigation.classList.add("navigationoff");
    navigation.classList.remove("navigation");
    arrow.classList.add("arrow_iconhiden");
    arrow.classList.remove("arrow_iconshown");
    arrowdiv.classList.add("arrowhidden");
    arrowdiv.classList.remove("arrowshown");
  }
}

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}

function SettingsSwitchOn() {
  if (settingsWindowOff.classList.contains("SettingsWindowOff")) {
    settingsWindowOff.classList.remove("SettingsWindowOff");
    settingsWindowOff.classList.add("SettingsWindow");
  } else {
    settingsWindowOff.classList.remove("SettingsWindow");
    settingsWindowOff.classList.add("SettingsWindowOff");
  }
}

function InfoSwitchOn() {
  if (infoWindowOff.classList.contains("InfoWindowOff")) {
    infoWindowOff.classList.remove("InfoWindowOff");
    infoWindowOff.classList.add("InfoWindow");
  } else {
    infoWindowOff.classList.remove("InfoWindow");
    infoWindowOff.classList.add("InfoWindowOff");
  }
}

function ProfileSwitchOn() {
  if (ProfileWindowOff.classList.contains("ProfileWindowOff")) {
    ProfileWindowOff.classList.remove("ProfileWindowOff");
    ProfileWindowOff.classList.add("ProfileWindow");
  } else {
    ProfileWindowOff.classList.remove("ProfileWindow");
    ProfileWindowOff.classList.add("ProfileWindowOff");
  }
}
