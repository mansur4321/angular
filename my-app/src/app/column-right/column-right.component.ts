import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-column-right',
    templateUrl: './column-right.component.html',
    styleUrls: ['./column-right.component.less']
})
export class ColumnRightComponent {
    svg = [
        `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 5.125h19.5v13.75H2.25V5.125z" fill="#FFDA3E" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9.054l-9.75 9.821h19.5L12 9.054z" fill="#FC0" />
  <path fill-rule="evenodd" clip-rule="evenodd"
      d="M21.75 5.125l-8.733 7.959a1.522 1.522 0 0 1-2.033 0L2.25 5.125h19.5z" fill="#F33" />`,


        ` <path
    d="M5.408 12.449c.992 2.07 4.326 2.556 7.447 1.086 3.122-1.47 4.849-4.338 3.857-6.407-.17-.354.2-1.657-.226-1.63-1.07.071-1.702-.214-2.487-.463a7.013 7.013 0 0 0-5.048.352 6.954 6.954 0 0 0-3.197 3.07c-.48.925-.883 2.006-1.504 2.62-.314.31.983 1.005 1.158 1.372z"
    fill="#000" />
<path
    d="M2.14 16.4c1.368 2.856 21.095-6.43 19.727-9.286-.887-1.852-6.617-2.514-12.064.05C4.356 9.728 1.067 14.16 2.14 16.4z"
    fill="#000" />
<path
    d="M2.192 16.507c.883 1.845 6.464 2.197 11.911-.367 5.448-2.564 8.699-7.074 7.815-8.918-.883-1.845-6.085-1.406-11.532 1.158-5.448 2.565-9.078 6.283-8.194 8.127z"
    fill="#07F" />
<path
    d="M8.09 15.57c.42.876 2.857.599 5.444-.619 2.587-1.218 4.344-2.915 3.924-3.791-.42-.876-2.857-.599-5.444.619-2.587 1.218-4.344 2.915-3.924 3.791z"
    fill="#fff" />`,


        ` <path
    d="M12 20a8 8 0 007.983-8.518h-4.498l-1.036 4.942H12.12l1.059-4.942H8.567l.47-2.117h4.589L14.65 4.45A8 8 0 1012 20z"
    fill="url(#paint0_radial)" />
<path
    d="M12 20a8 8 0 007.983-8.518h-4.498l-1.036 4.942H12.12l1.059-4.942H8.567l.47-2.117h4.589L14.65 4.45A8 8 0 1012 20z"
    fill="url(#paint1_radial)" />
<path d="M16.748 5.561a8.02 8.02 0 012.808 3.804h-3.6l.793-3.804z" fill="url(#paint2_radial)" />
<path d="M16.748 5.561a8.02 8.02 0 012.808 3.804h-3.6l.793-3.804z" fill="url(#paint3_radial)" />
<defs id="defs42">
    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(15.99999 -15.99999 24.2158 24.2158 4 20)">
        <stop offset=".076" stop-color="#48CCE0" id="stop10" />
        <stop offset=".308" stop-color="#428BEB" id="stop12" />
        <stop offset=".648" stop-color="#505ADD" id="stop14" />
    </radialGradient>
    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-15.8049 0 0 -44.8359 20 4)">
        <stop offset=".029" stop-color="#FCAB14" id="stop17" />
        <stop offset=".192" stop-color="#FA6641" id="stop19" />
        <stop offset=".402" stop-color="#BE40C0" id="stop21" />
        <stop offset="1" stop-color="#505ADD" stop-opacity="0" id="stop23" />
    </radialGradient>
    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(15.99999 -15.99999 24.2158 24.2158 4 20)">
        <stop offset=".076" stop-color="#48CCE0" id="stop26" />
        <stop offset=".308" stop-color="#428BEB" id="stop28" />
        <stop offset=".648" stop-color="#505ADD" id="stop30" />
    </radialGradient>
    <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-15.8049 0 0 -44.8359 20 4)">
        <stop offset=".029" stop-color="#FCAB14" id="stop33" />
        <stop offset=".192" stop-color="#FA6641" id="stop35" />
        <stop offset=".402" stop-color="#BE40C0" id="stop37" />
        <stop offset="1" stop-color="#505ADD" stop-opacity="0" id="stop39" />
    </radialGradient>
</defs>`
    ];

    @HostBinding('attr.class') cssClass = 'column-right';

}
