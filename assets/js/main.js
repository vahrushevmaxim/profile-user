(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){function d(r){if(!r)return;const o=document.querySelector(r),n=o.querySelector("[data-input-search]"),e=/[!@#$%^&*()]/g;function t(i){i.value=i.value.substring(0,12),alert("Максимум 12 символов")}function s(){alert("Введите больше 4 символов")}o.addEventListener("submit",i=>{i.preventDefault(),n.value.length<4&&s()}),n.addEventListener("change",i=>{n.value.length<4&&s()}),n.addEventListener("input",i=>{n.value.length>12?t(n):n.value=n.value.replace(e,"")})}d("[data-form-search]")});document.addEventListener("DOMContentLoaded",function(){class d{constructor(o){o&&(this.dropdown=document.querySelector(o),this.dropdownButton=this.dropdown.querySelector("[data-button-dropdown]"),this.dropdownButtonText=this.dropdown.querySelector("[data-button-text]"),this.dropdownListItems=this.dropdown.querySelector("[data-list-dropdown]"),this.setEventsDropdown())}setEventsDropdown(){this.dropdownButton.addEventListener("click",o=>{this.dropdownListItems.classList.contains("dropdown-list-mobile--active")?this.closeDropdown(o):this.showDropdown(o)})}closeDropdown(o){this.dropdownButtonText.innerText="Open menu",this.dropdownListItems.classList.remove("dropdown-list-mobile--active")}showDropdown(o){this.dropdownButtonText.innerText="Close menu",this.dropdownListItems.classList.add("dropdown-list-mobile--active")}}new d("[data-dropdown]")});