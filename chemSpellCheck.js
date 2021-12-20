let outputStyle = 0;
let outputText = "";
const twoLetterIndex = 14;
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

function checkNextLetters(inputString, indicesSoFar, originalWord) {
    // If the word is done, that means you have a viable ChemSpell. Write it out.

    if (inputString.length === 0) {
        writeOutput(indicesSoFar, originalWord, outputStyle);
        return;
    }

    // Could probably combine these two checks into one.

    // If the word has at least two letters left, check them for any matches with the two-letter symbols.
    if (inputString.length >= 2) {
        for (let i = twoLetterIndex; i < elements.length; i++) {
            if (inputString.substr(0, 2).toLowerCase() === elements[i][0].toLowerCase()) {
                checkNextLetters(inputString.slice(2), indicesSoFar.concat(i), originalWord)
            }
        }
    }

    // Lastly, check the first letter of the word for any matches with the one-letter symbols.
    for (let i = 0; i < twoLetterIndex; i++) {
        if (inputString.substr(0, 1).toLowerCase() === elements[i][0].toLowerCase()) {
            checkNextLetters(inputString.slice(1), indicesSoFar.concat(i), originalWord)
        }
    }


    return;
}

function writeOutput(indices, originalWord) {
    outputLine = "";
    indices.forEach((index) => {
        outputLine += elements[index][outputStyle] + " - ";
    });
    outputText += (originalWord + ": " + outputLine.slice(0, -3) + "\n");
}


function checkClick() {
    console.log("I was clicked!");
    outputText = "";

    if (document.getElementById("fullnameradio").checked) {
        outputStyle = 1;
    } else {
        outputStyle = 0;
    }

    var inputElement = document.getElementById("inputtext");
    var inputs = inputElement.value.split('\n');
    inputs.forEach((input) => {
        if (input.replace(/[^a-zA-Z]/g, "").length > 0) {
            checkNextLetters(input.replace(/[^a-zA-Z]/g, ""), new Array(), input)
        }
        var outputElement = document.getElementById("outputtext");
        outputElement.value = outputText;
    });
}

function sortAlpha() { // Taken from StackOverflow: https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
    var listToSort = document.getElementById("inputtext").value.split('\n');
    listToSort = listToSort.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
    document.getElementById("inputtext").value = listToSort.join('\n');
}

function sortLength() {// Taken from StackOverflow: https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element/10630852
	var listToSort = document.getElementById("inputtext").value.split('\n');
	listToSort = listToSort.sort(function(a, b) {
  return a.length - b.length || // sort by length, if equal then
         a.localeCompare(b, undefined, {sensitivity: 'base'});    // sort by dictionary order
});
	document.getElementById("inputtext").value = listToSort.join('\n');
}