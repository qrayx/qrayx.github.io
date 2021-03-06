let outputStyle = 0; // 0 = symbols, 1 = full names
let outputText = ""; // a global variable used to hold the output text

const elements = [
    ["B", "Boron"],
    ["C", "Carbon"],
    ["F", "Fluorine"],
    ["H", "Hydrogen"],
    ["I", "Iodine"],
    ["K", "Potassium"],
    ["N", "Nitrogen"],
    ["O", "Oxygen"],
    ["P", "Phosphorus"],
    ["S", "Sulfur"],
    ["U", "Uranium"],
    ["V", "Vanadium"],
    ["W", "Tungsten"],
    ["Y", "Yttrium"],
    ["Ac", "Actinium"],
    ["Ag", "Silver"],
    ["Al", "Aluminium"],
    ["Am", "Americium"],
    ["Ar", "Argon"],
    ["As", "Arsenic"],
    ["At", "Astatine"],
    ["Au", "Gold"],
    ["Ba", "Barium"],
    ["Be", "Beryllium"],
    ["Bh", "Bohrium"],
    ["Bi", "Bismuth"],
    ["Bk", "Berkelium"],
    ["Br", "Bromine"],
    ["Ca", "Calcium"],
    ["Cd", "Cadmium"],
    ["Ce", "Cerium"],
    ["Cf", "Californium"],
    ["Cl", "Chlorine"],
    ["Cm", "Curium"],
    ["Cn", "Copernicium"],
    ["Co", "Cobalt"],
    ["Cr", "Chromium"],
    ["Cs", "Caesium"],
    ["Cu", "Copper"],
    ["Db", "Dubnium"],
    ["Ds", "Darmstadtium"],
    ["Dy", "Dysprosium"],
    ["Er", "Erbium"],
    ["Es", "Einsteinium"],
    ["Eu", "Europium"],
    ["Fe", "Iron"],
    ["Fl", "Flerovium"],
    ["Fm", "Fermium"],
    ["Fr", "Francium"],
    ["Ga", "Gallium"],
    ["Gd", "Gadolinium"],
    ["Ge", "Germanium"],
    ["He", "Helium"],
    ["Hf", "Hafnium"],
    ["Hg", "Mercury"],
    ["Ho", "Holmium"],
    ["Hs", "Hassium"],
    ["In", "Indium"],
    ["Ir", "Iridium"],
    ["Kr", "Krypton"],
    ["La", "Lanthanum"],
    ["Li", "Lithium"],
    ["Lr", "Lawrencium"],
    ["Lu", "Lutetium"],
    ["Lv", "Livermorium"],
    ["Mc", "Moscovium"],
    ["Md", "Mendelevium"],
    ["Mg", "Magnesium"],
    ["Mn", "Manganese"],
    ["Mo", "Molybdenum"],
    ["Mt", "Meitnerium"],
    ["Na", "Sodium"],
    ["Nb", "Niobium"],
    ["Nd", "Neodymium"],
    ["Ne", "Neon"],
    ["Nh", "Nihonium"],
    ["Ni", "Nickel"],
    ["No", "Nobelium"],
    ["Np", "Neptunium"],
    ["Og", "Oganesson"],
    ["Os", "Osmium"],
    ["Pa", "Protactinium"],
    ["Pb", "Lead"],
    ["Pd", "Palladium"],
    ["Pm", "Promethium"],
    ["Po", "Polonium"],
    ["Pr", "Praseodymium"],
    ["Pt", "Platinum"],
    ["Pu", "Plutonium"],
    ["Ra", "Radium"],
    ["Rb", "Rubidium"],
    ["Re", "Rhenium"],
    ["Rf", "Rutherfordium"],
    ["Rg", "Roentgenium"],
    ["Rh", "Rhodium"],
    ["Rn", "Radon"],
    ["Ru", "Ruthenium"],
    ["Sb", "Antimony"],
    ["Sc", "Scandium"],
    ["Se", "Selenium"],
    ["Sg", "Seaborgium"],
    ["Si", "Silicon"],
    ["Sm", "Samarium"],
    ["Sn", "Tin"],
    ["Sr", "Strontium"],
    ["Ta", "Tantalum"],
    ["Tb", "Terbium"],
    ["Tc", "Technetium"],
    ["Te", "Tellurium"],
    ["Th", "Thorium"],
    ["Ti", "Titanium"],
    ["Tl", "Thallium"],
    ["Tm", "Thulium"],
    ["Ts", "Tennessine"],
    ["Xe", "Xenon"],
    ["Yb", "Ytterbium"],
    ["Zn", "Zinc"],
    ["Zr", "Zirconium"]
];
const countries = [ // ISO 3166-1 alpha-2. Modified to remove non-soverign states, simplified state names, and use UK instead of GB.
    ["AD", "Andorra"],
    ["AE", "United Arab Emirates"],
    ["AF", "Afghanistan"],
    ["AG", "Antigua and Barbuda"],
    //["AI", "Anguilla"],
    ["AL", "Albania"],
    ["AM", "Armenia"],
    ["AO", "Angola"],
    //["AQ", "Antarctica"],
    ["AR", "Argentina"],
    //["AS", "American Samoa"],
    ["AT", "Austria"],
    ["AU", "Australia"],
    //["AW", "Aruba"],
    //["AX", "??land Islands"],
    ["AZ", "Azerbaijan"],
    ["BA", "Bosnia and Herzegovina"],
    ["BB", "Barbados"],
    ["BD", "Bangladesh"],
    ["BE", "Belgium"],
    ["BF", "Burkina Faso"],
    ["BG", "Bulgaria"],
    ["BH", "Bahrain"],
    ["BI", "Burundi"],
    ["BJ", "Benin"],
    //["BL", "Saint Barth??lemy"],
    ["BM", "Bermuda"],
    ["BN", "Brunei"],
    ["BO", "Bolivia"],
    //["BQ", "Bonaire, Sint Eustatius and Saba"],
    ["BR", "Brazil"],
    ["BS", "Bahamas"],
    ["BT", "Bhutan"],
    //["BV", "Bouvet Island"],
    ["BW", "Botswana"],
    ["BY", "Belarus"],
    ["BZ", "Belize"],
    ["CA", "Canada"],
    //["CC", "Cocos (Keeling) Islands"],
    ["CD", "Congo, Democratic Republic of the"],
    ["CF", "Central African Republic"],
    ["CG", "Congo"],
    ["CH", "Switzerland"],
    ["CI", "C??te d'Ivoire"],
    ["CK", "Cook Islands"],
    ["CL", "Chile"],
    ["CM", "Cameroon"],
    ["CN", "China"],
    ["CO", "Colombia"],
    ["CR", "Costa Rica"],
    ["CU", "Cuba"],
    ["CV", "Cabo Verde"],
    //["CW", "Cura??ao"],
    //["CX", "Christmas Island"],
    ["CY", "Cyprus"],
    ["CZ", "Czechia"],
    ["DE", "Germany"],
    ["DJ", "Djibouti"],
    ["DK", "Denmark"],
    ["DM", "Dominica"],
    ["DO", "Dominican Republic"],
    ["DZ", "Algeria"],
    ["EC", "Ecuador"],
    ["EE", "Estonia"],
    ["EG", "Egypt"],
    ["EH", "Western Sahara"],
    ["ER", "Eritrea"],
    ["ES", "Spain"],
    ["ET", "Ethiopia"],
    ["FI", "Finland"],
    ["FJ", "Fiji"],
    //["FK", "Falkland Islands"],
    ["FM", "Micronesia (Federated States of)"],
    //["FO", "Faroe Islands"],
    ["FR", "France"],
    ["GA", "Gabon"],
    //["GB", "United Kingdom of Great Britain and Northern Ireland"],
    ["GD", "Grenada"],
    ["GE", "Georgia"],
    //["GF", "French Guiana"],
    ["GG", "Guernsey"],
    ["GH", "Ghana"],
    ["GI", "Gibraltar"],
    //["GL", "Greenland"],
    ["GM", "Gambia"],
    ["GN", "Guinea"],
    //["GP", "Guadeloupe"],
    ["GQ", "Equatorial Guinea"],
    ["GR", "Greece"],
    //["GS", "South Georgia and the South Sandwich Islands"],
    ["GT", "Guatemala"],
    ["GU", "Guam"],
    ["GW", "Guinea-Bissau"],
    ["GY", "Guyana"],
    //["HK", "Hong Kong"],
    //["HM", "Heard Island and McDonald Islands"],
    ["HN", "Honduras"],
    ["HR", "Croatia"],
    ["HT", "Haiti"],
    ["HU", "Hungary"],
    ["ID", "Indonesia"],
    ["IE", "Ireland"],
    ["IL", "Israel"],
    //["IM", "Isle of Man"],
    ["IN", "India"],
    //["IO", "British Indian Ocean Territory"],
    ["IQ", "Iraq"],
    ["IR", "Iran"],
    ["IS", "Iceland"],
    ["IT", "Italy"],
    //["JE", "Jersey"],
    ["JM", "Jamaica"],
    ["JO", "Jordan"],
    ["JP", "Japan"],
    ["KE", "Kenya"],
    ["KG", "Kyrgyzstan"],
    ["KH", "Cambodia"],
    ["KI", "Kiribati"],
    ["KM", "Comoros"],
    ["KN", "Saint Kitts and Nevis"],
    ["KP", "North Korea"],
    ["KR", "South Korea"],
    ["KW", "Kuwait"],
    //["KY", "Cayman Islands"],
    ["KZ", "Kazakhstan"],
    ["LA", "Laos"],
    ["LB", "Lebanon"],
    ["LC", "Saint Lucia"],
    ["LI", "Liechtenstein"],
    ["LK", "Sri Lanka"],
    ["LR", "Liberia"],
    ["LS", "Lesotho"],
    ["LT", "Lithuania"],
    ["LU", "Luxembourg"],
    ["LV", "Latvia"],
    ["LY", "Libya"],
    ["MA", "Morocco"],
    ["MC", "Monaco"],
    ["MD", "Moldova"],
    ["ME", "Montenegro"],
    //["MF", "Saint Martin (French part)"],
    ["MG", "Madagascar"],
    ["MH", "Marshall Islands"],
    ["MK", "North Macedonia"],
    ["ML", "Mali"],
    ["MM", "Myanmar"],
    ["MN", "Mongolia"],
    ["MO", "Macao"],
    ["MP", "Northern Mariana Islands"],
    //["MQ", "Martinique"],
    ["MR", "Mauritania"],
    //["MS", "Montserrat"],
    ["MT", "Malta"],
    ["MU", "Mauritius"],
    ["MV", "Maldives"],
    ["MW", "Malawi"],
    ["MX", "Mexico"],
    ["MY", "Malaysia"],
    ["MZ", "Mozambique"],
    ["NA", "Namibia"],
    //["NC", "New Caledonia"],
    ["NE", "Niger"],
    //["NF", "Norfolk Island"],
    ["NG", "Nigeria"],
    ["NI", "Nicaragua"],
    ["NL", "Netherlands"],
    ["NO", "Norway"],
    ["NP", "Nepal"],
    ["NR", "Nauru"],
    ["NU", "Niue"],
    ["NZ", "New Zealand"],
    ["OM", "Oman"],
    ["PA", "Panama"],
    ["PE", "Peru"],
    //["PF", "French Polynesia"],
    ["PG", "Papua New Guinea"],
    ["PH", "Philippines"],
    ["PK", "Pakistan"],
    ["PL", "Poland"],
    //["PM", "Saint Pierre and Miquelon"],
    //["PN", "Pitcairn"],
    //["PR", "Puerto Rico"],
    ["PS", "Palestine"],
    ["PT", "Portugal"],
    ["PW", "Palau"],
    ["PY", "Paraguay"],
    ["QA", "Qatar"],
    //["RE", "R??union"],
    ["RO", "Romania"],
    ["RS", "Serbia"],
    ["RU", "Russia"],
    ["RW", "Rwanda"],
    ["SA", "Saudi Arabia"],
    ["SB", "Solomon Islands"],
    ["SC", "Seychelles"],
    ["SD", "Sudan"],
    ["SE", "Sweden"],
    ["SG", "Singapore"],
    //["SH", "Saint Helena, Ascension and Tristan da Cunha"],
    ["SI", "Slovenia"],
    //["SJ", "Svalbard and Jan Mayen"],
    ["SK", "Slovakia"],
    ["SL", "Sierra Leone"],
    ["SM", "San Marino"],
    ["SN", "Senegal"],
    ["SO", "Somalia"],
    ["SR", "Suriname"],
    ["SS", "South Sudan"],
    ["ST", "Sao Tome and Principe"],
    ["SV", "El Salvador"],
    //["SX", "Sint Maarten (Dutch part)"],
    ["SY", "Syria"],
    ["SZ", "Eswatini"],
    ["TC", "Turks and Caicos Islands"],
    ["TD", "Chad"],
    //["TF", "French Southern Territories"],
    ["TG", "Togo"],
    ["TH", "Thailand"],
    ["TJ", "Tajikistan"],
    //["TK", "Tokelau"],
    ["TL", "Timor-Leste"],
    ["TM", "Turkmenistan"],
    ["TN", "Tunisia"],
    ["TO", "Tonga"],
    ["TR", "Turkey"],
    ["TT", "Trinidad and Tobago"],
    ["TV", "Tuvalu"],
    ["TW", "Taiwan"],
    ["TZ", "Tanzania"],
    ["UA", "Ukraine"],
    ["UG", "Uganda"],
    ["UK", "United Kingdom"], // not officially part of ISO 3166
    //["UM", "United States Minor Outlying Islands"],
    ["US", "United States of America"],
    ["UY", "Uruguay"],
    ["UZ", "Uzbekistan"],
    ["VA", "Holy See"],
    ["VC", "Saint Vincent and the Grenadines"],
    ["VE", "Venezuela"],
    //["VG", "Virgin Islands (British)"],
    //["VI", "Virgin Islands (U.S.)"],
    ["VN", "Viet Nam"],
    ["VU", "Vanuatu"],
    //["WF", "Wallis and Futuna"],
    ["WS", "Samoa"],
    ["YE", "Yemen"],
    //["YT", "Mayotte"],
    ["ZA", "South Africa"],
    ["ZM", "Zambia"],
    ["ZW", "Zimbabwe"]
];

const states = [
    ["AL", "Alabama"],
    ["AK", "Alaska"],
    ["AZ", "Arizona"],
    ["AR", "Arkansas"],
    ["CA", "California"],
    ["CO", "Colorado"],
    ["CT", "Connecticut"],
    ["DE", "Delaware"],
    ["DC", "District of Columbia"],
    ["FL", "Florida"],
    ["GA", "Georgia"],
    ["HI", "Hawaii"],
    ["ID", "Idaho"],
    ["IL", "Illinois"],
    ["IN", "Indiana"],
    ["IA", "Iowa"],
    ["KS", "Kansas"],
    ["KY", "Kentucky"],
    ["LA", "Louisiana"],
    ["ME", "Maine"],
    ["MD", "Maryland"],
    ["MA", "Massachusetts"],
    ["MI", "Michigan"],
    ["MN", "Minnesota"],
    ["MS", "Mississippi"],
    ["MO", "Missouri"],
    ["MT", "Montana"],
    ["NE", "Nebraska"],
    ["NV", "Nevada"],
    ["NH", "New Hampshire"],
    ["NJ", "New Jersey"],
    ["NM", "New Mexico"],
    ["NY", "New York"],
    ["NC", "North Carolina"],
    ["ND", "North Dakota"],
    ["OH", "Ohio"],
    ["OK", "Oklahoma"],
    ["OR", "Oregon"],
    ["PA", "Pennsylvania"],
    ["RI", "Rhode Island"],
    ["SC", "South Carolina"],
    ["SD", "South Dakota"],
    ["TN", "Tennessee"],
    ["TX", "Texas"],
    ["UT", "Utah"],
    ["VT", "Vermont"],
    ["VA", "Virginia"],
    ["WA", "Washington"],
    ["WV", "West Virginia"],
    ["WI", "Wisconsin"],
    ["WY", "Wyoming"]
];

let selectedList = elements;

function checkNextLetters(inputString, indicesSoFar, originalWord) {
    // If the word is done, that means you have a viable ChemSpell. Write it out.
    if (inputString.length === 0) {
        writeOutput(indicesSoFar, originalWord, outputStyle);
        return;
    }

    // Otherwise, go through the list to see if the next letter(s) in your word match any symbols.
    for (let i = 0; i < selectedList.length; i++) {
        let symbolLength = selectedList[i][0].length; // Symbols are often 1 or 2 characters long.
        if (inputString.substr(0, symbolLength).toLowerCase() === selectedList[i][0].toLowerCase()) {
            checkNextLetters(inputString.slice(symbolLength), indicesSoFar.concat(i), originalWord);
        }
    }
    return;
}

function writeOutput(indices, originalWord) {
    outputLine = "";
    indices.forEach((index) => {
        outputLine += selectedList[index][outputStyle] + " - ";
    });
    outputText += (originalWord + ": " + outputLine.slice(0, -3) + "\n");
    // Each symbol/word in the output has " - " and a new line appended. At the end, remove the final '-' and newline.
}


function checkClick() {
    console.log("I was clicked!");
    outputText = "";

    if (document.getElementById("fullnameradio").checked) {
        outputStyle = 1;
    } else {
        outputStyle = 0;
    }

    if (document.getElementById("elementList").checked) {
        selectedList = elements;
    } else if (document.getElementById("countryList").checked) {
        selectedList = countries;
    } else {
        selectedList = states;
    }

    var inputTextElement = document.getElementById("inputtext");
    var inputs = inputTextElement.value.split('\n');
    inputs.forEach((input) => {
        // Taken from StackOverflow: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
        // Change accented characters into non-accented characters, then remove non-letter characters and spaces.
        let inputAdjusted = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z]/g, "");
        if (inputAdjusted.length > 0) {
            checkNextLetters(inputAdjusted, new Array(), input)
        }
        var outputTextElement = document.getElementById("outputtext");
        outputTextElement.value = outputText;
    });
}

function sortAlpha() { // Taken from StackOverflow: https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
    var listToSort = document.getElementById("inputtext").value.split('\n');
    listToSort = listToSort.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    document.getElementById("inputtext").value = listToSort.join('\n');
}

function sortLength() { // Taken from StackOverflow: https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element/10630852
    var listToSort = document.getElementById("inputtext").value.split('\n');
    listToSort = listToSort.sort(function(a, b) {
        return a.length - b.length || // sort by length, if equal then
            a.localeCompare(b, undefined, { sensitivity: 'base' }); // sort by dictionary order
    });
    document.getElementById("inputtext").value = listToSort.join('\n');
}