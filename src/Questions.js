const questions = [
    {
        questionText: 'This one is condensation polymer:',
        answerOptions: [
            { answerText: 'PVC', isCorrect: false },
            { answerText: 'PVA', isCorrect: false },
            { answerText: 'Polythylene', isCorrect: false },
            { answerText: 'Terylene', isCorrect: true },
        ],
    },
    {
        questionText: 'This number of isomers of pantane is :',
        answerOptions: [
            { answerText: '3', isCorrect: true },
            { answerText: '5', isCorrect: false },
            { answerText: '7', isCorrect: false },
            { answerText: '9', isCorrect: false },
        ],
    },
    {
        questionText: 'Propanone and propanal are',
        answerOptions: [
            { answerText: 'metamers', isCorrect: false },
            { answerText: 'chain isomers', isCorrect: false },
            { answerText: 'Functional Group Isomers', isCorrect: true },
            { answerText: 'position isomers', isCorrect: false },
        ],
    },
    {
        questionText: 'This is not a nuclephile',
        answerOptions: [
            { answerText: 'OH', isCorrect: false },
            { answerText: 'NH3', isCorrect: false },
            { answerText: 'BF3', isCorrect: true },
            { answerText: 'CN', isCorrect: false },
        ],
    },
    {
        questionText: 'Reduction of aldehyde gives',
        answerOptions: [
            { answerText: 'Carboxylic acid', isCorrect: false },
            { answerText: 'Alcohol', isCorrect: true },
            { answerText: 'Ester', isCorrect: false },
            { answerText: 'Ether', isCorrect: false },
        ],
    },
    {
        questionText: 'Hyberdization in the carbon atom of carbonyl group is of this type',
        answerOptions: [
            { answerText: 'sp', isCorrect: false },
            { answerText: 'sp2', isCorrect: true },
            { answerText: 'sp3', isCorrect: false },
            { answerText: 'dsp2', isCorrect: false },
        ],
    },
    {
        questionText: 'This imaprts green colour to glass',
        answerOptions: [
            { answerText: 'CoO', isCorrect: false },
            { answerText: 'MnO2', isCorrect: false },
            { answerText: 'CuO', isCorrect: false },
            { answerText: 'Cr2O3', isCorrect: true },
        ],
    },
    {
        questionText: 'Rickets is caused by the deficiency of Vitamin:',
        answerOptions: [
            { answerText: 'A', isCorrect: false },
            { answerText: 'B', isCorrect: false },
            { answerText: 'C', isCorrect: false },
            { answerText: 'D', isCorrect: true },
        ],
    },
    {
        questionText: 'Milk Suger is also called:',
        answerOptions: [
            { answerText: 'Glucose', isCorrect: false },
            { answerText: 'Fructose', isCorrect: false },
            { answerText: 'Lactose', isCorrect: true },
            { answerText: 'Sucrose', isCorrect: false },
        ],
    },
    {
        questionText: 'Octate rule fulfiled by all nobel gases except',
        answerOptions: [
            { answerText: 'Ne', isCorrect: false },
            { answerText: 'Ar', isCorrect: false },
            { answerText: 'He', isCorrect: true },
            { answerText: 'Xe', isCorrect: false },
        ],
    },
    {
        questionText: 'The element with atomic number 33 belongs to',
        answerOptions: [
            { answerText: 's-block', isCorrect: false },
            { answerText: 'p-block', isCorrect: true },
            { answerText: 'd-block', isCorrect: false },
            { answerText: 'f-block', isCorrect: false },
        ],
    },
    {
        questionText: 'Hydrides of VA group are',
        answerOptions: [
            { answerText: 'basic', isCorrect: true },
            { answerText: 'acidic', isCorrect: false },
            { answerText: 'amphoteric', isCorrect: false },
            { answerText: 'neutral', isCorrect: false },
        ],
    },
    {
        questionText: 'The nucleus of Tritinium consist of',
        answerOptions: [
            { answerText: 'one person only', isCorrect: false },
            { answerText: 'One proton and one neutron', isCorrect: false },
            { answerText: 'two proton and two neutron', isCorrect: false},
            { answerText: 'one proton and two neutron', isCorrect: true },
        ],
    },
    {
        questionText: 'The metal form superOxide',
        answerOptions: [
            { answerText: 'Li', isCorrect: false },
            { answerText: 'Be', isCorrect: false },
            { answerText: 'K', isCorrect: true},
            { answerText: 'Mg', isCorrect: false },
        ],
    },
    {
        questionText: 'Antidote of H2S poisoning is very dilute: ',
        answerOptions: [
            { answerText: 'Nitrogen', isCorrect: false },
            { answerText: 'Oxygen', isCorrect: false },
            { answerText: 'chlorine', isCorrect: true},
            { answerText: 'Helium', isCorrect: false },
        ],
    },
    {
        questionText: 'The product of heating Boric acid to 140C is ',
        answerOptions: [
            { answerText: 'Orthoboric Acid', isCorrect: false },
            { answerText: 'Metaboric', isCorrect: false },
            { answerText: 'Pyroboric', isCorrect: true},
            { answerText: 'Boric Oxide', isCorrect: false },
        ],
    },
    {
        questionText: 'Galvanized iron mean iron coated with ',
        answerOptions: [
            { answerText: 'Zn', isCorrect: true },
            { answerText: 'Cu', isCorrect: false },
            { answerText: 'Al', isCorrect: false},
            { answerText: 'Sa', isCorrect: false },
        ],
    },
    {
        questionText: 'This is not nitrogeneous fertilizer ',
        answerOptions: [
            { answerText: 'Urea', isCorrect: false },
            { answerText: 'Triple phosphate', isCorrect: true },
            { answerText: 'Ammonium sulphate', isCorrect: false},
            { answerText: 'Triple nitrate', isCorrect: false },
        ],
    },
    {
        questionText: 'Chemical compostion of colemanite is ',
        answerOptions: [
            { answerText: 'Ca2B6O11%H2O', isCorrect: true },
            { answerText: 'CaB4O7$H2O', isCorrect: false },
            { answerText: 'Na2B4O7$H2O', isCorrect: false},
            { answerText: 'CaNaB5O7*H2O', isCorrect: false },
        ],
    },
    {
        questionText: 'Coinage metals are elements of 1B group and these include ',
        answerOptions: [
            { answerText: 'Cu,Ag,Au', isCorrect: true },
            { answerText: 'Zn,Cd,Hg', isCorrect: false },
            { answerText: 'Fe,Co,Ni', isCorrect: false},
            { answerText: 'Cu,Zn,Ni', isCorrect: false },
        ],
    },
    {
        questionText: 'Having hakf-filled valance shell, Hydrogen resumbles the ',
        answerOptions: [
            { answerText: 'Element of VA group', isCorrect: false },
            { answerText: 'Element of IVA group ', isCorrect: true },
            { answerText: 'Element of VIA group ', isCorrect: false},
            { answerText: 'Element of VIIA group', isCorrect: false },
        ],
    },
    {
        questionText: 'Plaster of paris is obtained by heating ',
        answerOptions: [
            { answerText: 'Gypsum', isCorrect: true },
            { answerText: 'Epson', isCorrect: false },
            { answerText: 'Limestone ', isCorrect: false},
            { answerText: 'Ammonal', isCorrect: false },
        ],
    },
    {
        questionText: 'The mixture of Aluminium powder and Aluminium nitrate is Known ',
        answerOptions: [
            { answerText: 'Aluminium bronze ', isCorrect: false },
            { answerText: 'Duralumin', isCorrect: false },
            { answerText: 'Ammonal ', isCorrect: true},
            { answerText: 'Alum', isCorrect: false },
        ],
    },
    {
        questionText: 'The commercial name of Phenol Formaldehyde Polymer is ',
        answerOptions: [
            { answerText: 'Celluoid', isCorrect: false },
            { answerText: 'Teflon', isCorrect: false },
            { answerText: 'P.V.C ', isCorrect: false},
            { answerText: 'Backlite', isCorrect: true },
        ],
    },
    {
        questionText: 'The First step in similar in these mechanism ',
        answerOptions: [
            { answerText: 'E1 and E2', isCorrect: false },
            { answerText: 'SN1 and E2', isCorrect: false },
            { answerText: 'E1 and SN2', isCorrect: false},
            { answerText: 'SN1 and E1', isCorrect: true },
        ],
    },
    {
        questionText: 'In Acetone the number of bonds are',
        answerOptions: [
            { answerText: 'Nine theta one pi', isCorrect: true },
            { answerText: 'Ten theta', isCorrect: false },
            { answerText: 'Eight theta ', isCorrect: false},
            { answerText: 'Nine pi and one theta', isCorrect:false },
        ],
    },
    {
        questionText: 'Octane number is related to',
        answerOptions: [
            { answerText: 'Gasoline', isCorrect: true },
            { answerText: 'Kerosene', isCorrect: false },
            { answerText: 'Disel oil ', isCorrect: false},
            { answerText: 'Lubricants', isCorrect: false },
        ],
    },
    {
        questionText: 'The regent converts acetic acid into acetyl chloride is ',
        answerOptions: [
            { answerText: 'NaCl', isCorrect: false },
            { answerText: 'HCL/ZnCl', isCorrect: false },
            { answerText: 'SOCL2 ', isCorrect: true},
            { answerText: 'HCl', isCorrect: false },
        ],
    },
    {
        questionText: 'Sodium burns with excess of Oxygen to form its',
        answerOptions: [
            { answerText: 'Peroxide', isCorrect: true },
            { answerText: 'Superoxide', isCorrect: false },
            { answerText: 'MonoOxide', isCorrect: false},
            { answerText: 'DiOxide', isCorrect: false },
        ],
    },
    {
        questionText: 'It is not a memeber of vitamin B complex',
        answerOptions: [
            { answerText: 'Niacin', isCorrect: false },
            { answerText: 'Folic acid', isCorrect: false },
            { answerText: 'Retinol', isCorrect: true},
            { answerText: 'Riboflavin', isCorrect: false },
],
    },
    {
        questionText: 'Royal water isa mixture in the ratio of 1:3 by volume of :',
        answerOptions: [
            { answerText: 'HCL', isCorrect: false },
            { answerText: 'HNO3,HCL', isCorrect: true },
            { answerText: 'H2SO4', isCorrect: false},
            { answerText: 'HNO3', isCorrect: false },
        ],
    },
    {
        questionText: 'The temperature at which two allotropic forms of an element exist in equilibrium state is  :',
        answerOptions: [
            { answerText: 'Transition Temperature', isCorrect: true },
            { answerText: 'Equilibrium Temperature', isCorrect: false },
            { answerText: 'Normal Temperature', isCorrect: false},
            { answerText: 'Unstable Temperature', isCorrect: false },
        ],
    },
    {
        questionText: 'Ch4 /2H2+A in the giving reaction is ',
        answerOptions: [
            { answerText: 'Co2', isCorrect: false },
            { answerText: 'C', isCorrect: true },
            { answerText: 'Co ', isCorrect: false},
            { answerText: 'CH3', isCorrect: false },
        ],
    },
    {
        questionText: 'The Formula of Dolomite is ',
        answerOptions: [
            { answerText: 'KCL.MgCl2', isCorrect: false },
            { answerText: 'MgSO4.74H2O', isCorrect: false },
            { answerText: 'MgCO3.CaCO3', isCorrect: true},
            { answerText: 'MgCo3', isCorrect: false },
        ],
    },
    {
        questionText: 'E.D.T.A is this type of ligand :',
        answerOptions: [
            { answerText: 'Bidentate', isCorrect: false },
            { answerText: 'Tetradentate', isCorrect: false },
            { answerText: 'Pentadentate', isCorrect: false},
            { answerText: 'Hexadentate', isCorrect: true },
        ],
    },
    {
        questionText: 'The percentage by weight of Ethanol is rectified sprits is ',
        answerOptions: [
            { answerText: '92-95', isCorrect: true },
            { answerText: '70-80', isCorrect: false },
            { answerText: '85-90', isCorrect: false},
            { answerText: '50-60', isCorrect: false },
        ],
    },
    {
        questionText: 'The ratio of electrons, protons and neutrons in Deuterium is ',
        answerOptions: [
            { answerText: '(1:1:0)', isCorrect: false },
            { answerText: '(1:1:1)', isCorrect: true },
            { answerText: '(1:1:2)', isCorrect: false},
            { answerText: '(1:2:1)', isCorrect: true },
        ],
    },
    {
        questionText: 'Aluminium Bronze contains: ',
        answerOptions: [
            { answerText: '10% of Al and 90% of Cu', isCorrect: true },
            { answerText: '20% of Al and 80% of Cu', isCorrect: false },
            { answerText: '30% of Al and 70% of Cu', isCorrect: false},
            { answerText: '50% of Al and 50% of Cu', isCorrect: true },
        ],
    },
    {
        questionText: 'The atomic number of an element belonging to Group VA and 3dperiod is',
        answerOptions: [
            { answerText: '7', isCorrect: false },
            { answerText: '13', isCorrect: false },
            { answerText: '15', isCorrect: true},
            { answerText: '20', isCorrect: false },
        ],
    },
    {
        questionText: 'N2 gas liquifes at this temperature',
        answerOptions: [
            { answerText: '-270C', isCorrect: false },
            { answerText: '-200C', isCorrect: false },
            { answerText: '-196C', isCorrect: true},
            { answerText: '-118C', isCorrect: false },
        ],
    },
    {
        questionText: 'Hypo is used as',
        answerOptions: [
            { answerText: 'Fixer', isCorrect: true },
            { answerText: 'Developer', isCorrect: false },
            { answerText: 'Reducer', isCorrect: false},
            { answerText: 'Binder', isCorrect: false },
        ],
    },
    {
        questionText: 'Hypo is used as',
        answerOptions: [
            { answerText: 'Fixer', isCorrect: true },
            { answerText: 'Developer', isCorrect: false },
            { answerText: 'Reducer', isCorrect: false},
            { answerText: 'Binder', isCorrect: false },
        ],
    },
];
export default questions