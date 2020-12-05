// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(mockUpStrand());

const pAequorFactory = (number, array) => {
    return{
        specimenNum : number,
        dna : array,
        mutate() {
            let dnaRandBaseIndex = this.dna.indexOf(this.dna[Math.floor(Math.random()*15)]);
            let currentBase = this.dna[dnaRandBaseIndex];
            let newRandBase = returnRandBase();
            while (currentBase === newRandBase) {
                newRandBase = returnRandBase();
            }
            this.dna[dnaRandBaseIndex] = newRandBase;
            return this.dna;
        },
        compareDNA(pAequor) {
          let spec1 = this.specimenNum;
          let spec2 = pAequor.specimenNum;
          let matchingBases = 0;
          if(spec1 !== spec2) {
            for (let i = 0; i < this.dna.length; i++) {
              for (let j = 0; j < pAequor.dna.length; j++) {
                if (i === j) {
                  if (this.dna[i] === pAequor.dna[j]) {
                   matchingBases += 1;
                  }
                }
              }
            }
          } else {
            console.log('You are trying to compare the specimen number to itself. try again')
          } 
          let percentageMatch = Math.round((matchingBases * 100) / 15);
          console.log(`Percentage of matching DNA pairs between specimen: ${spec1} & specimen: ${spec2} is ${percentageMatch}%`);
        },
        willLikelySurvive() {
          let numberOfCGBases = 0;
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === 'C' || this.dna[i] === 'G') {
              numberOfCGBases += 1;
            }
          }
          let percentageMatch = Math.round((numberOfCGBases * 100) / 15);
          return (percentageMatch >= 60) ? true : false;
        }
    }
}

let pAequorSurvivors = [];
const instancesOfpAequor60 = instance => {
  let instances = instance.willLikelySurvive();
  if (instances === true) {
    pAequorSurvivors.push(instance.dna);
  } 
  return pAequorSurvivors;
}

const instancesOfpAequor = () => {
  let inst;
  let i = 0;
  while (pAequorSurvivors.length < 30) {
    inst = pAequorFactory(i, mockUpStrand());
    instancesOfpAequor60(inst);
    i++;
  }
  console.log(pAequorSurvivors);
}


const a = pAequorFactory(1, mockUpStrand());
const b = pAequorFactory(2, mockUpStrand());
//console.log(a.dna);
//console.log(a.mutate());
//a.compareDNA(b);
//let checkInstance = instancesOfpAequor60(a);
//console.log(checkInstance);
instancesOfpAequor();








