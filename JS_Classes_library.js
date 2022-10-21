class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = true;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }
    toggleCheckOutStatus(){
        return this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
        let totalRating =this.ratings.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue
        },0);
        const length = this._ratings.length;
        const avgRating  = totalRating / length;
        return avgRating;
    };
    addRating(array){
        for (let i =0; i<this._ratings.length; i++){
                return this._ratings.push(array);
        }
    };
};

class Book extends Media{
    constructor(author,title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
};

class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director
    }
    get runTime(){
        return this._runTime
    }
};

class CD extends Media{
    constructor(artist, title){
        super(title);
        this._artist = artist;
        this._songs = [];
    }
    get artist(){
        return this._artist
    }
    get songs(){
        return this._songs
    }

    addCD(arr){
        return this._songs.push(arr)
    }
    shuffle(){
        const random = Math.floor(Math.random() * this._songs.length);
        return this._songs[random];
    }
};

/*
const po = new CD('brodway', 'phathomOfTheOpera');
po.addCD('The Angel of the night');
po.addCD('Think of me');
po.addCD('Masquerade');
console.log(po.songs);
console.log(po.shuffle());

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); */

