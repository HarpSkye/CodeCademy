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

function pAequorFactory(num, arr){
  const pAeq = {
            _specimenNum: num,
            _dna: arr,
            //step 4: mutate the randome dna
            mutate(){
              let ranIndex = Math.floor(Math.random()*15);
              const noA = ['T', 'C', 'G'];
              const noT = ['A', 'C', 'G'];
              const noC = ['A', 'T', 'G'];
              const noG = ['A', 'T', 'C'];

              if (arr[ranIndex] ==='A'){this._dna[ranIndex] = noA[Math.floor(Math.random)*3]}
              else if (arr[ranIndex] === 'T'){this._dna[ranIndex] = noT[Math.floor(Math.random)*3]}
              else if (arr[ranIndex] === 'C'){this._dna[ranIndex] = noC[Math.floor(Math.random)*3]}
              else if (arr[ranIndex] === 'G'){this._dna[ranIndex] = noG[Math.floor(Math.random)*3]}
                
              return this._dna
            },
            compareDNA(otherPAQ){
              let total = this._dna.length;
              let common = 0;
              for (i=0; i< total; i++){
                if(this._dna[i] === otherPAQ[i]){
                return common += 1;}
              }
              const percentage = Math.round(common/total)*100
              return console.log(`specimen ${this._specimenNum} and specimen ${otherPAQ} have ${percentage}% DNA in common`)
            },
            willLikelySurvive(){
              let counter = 0;
              for(let i =0; i < this._dna.length; i++){
                if(this._dna[i] === 'C' || this._dna[i] ==='G'){
                  counter +=1;
                }
              }
              if (counter / this._dna.length >0.6){return true} else{return false}
            }
          }
  return pAeq;
}


let orgArray = [];
while (survivors.length < 30) {
  pAequorNumber = survivors.length + 1;
  newPAequor = pAequorFactory(pAequorNumber, mockUpStrand());
  if (newPAequor.willLikelySurvive() === true) {
    survivors.push(newPAequor);
  }
}
console.log(survivors);





