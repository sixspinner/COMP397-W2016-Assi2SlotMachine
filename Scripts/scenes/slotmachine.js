var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var SlotMachine = (function (_super) {
        __extends(SlotMachine, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SlotMachine() {
            _super.call(this);
            //In order of decreasing frequency of occurrence
            this._blanks = 0;
            this._magikarps = 0;
            this._voltorbs = 0;
            this._jigglypuffs = 0;
            this._pikachus = 0;
            this._charizards = 0;
            this._raikous = 0;
            this._articunos = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SlotMachine.prototype.start = function () {
            for (var reel; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                console.log(this._reels[reel]);
            }
            this._reels = new Array(); //instantiate reels bitmap
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            // add Bet1Button to the scene
            this._bet1Button = new objects.Button("Bet1Button", 168, 382, false);
            this.addChild(this._bet1Button);
            this._bet1Button.on("click", this._bet1ButtonClick, this);
            // add Bet10Button to the scene
            this._bet10Button = new objects.Button("Bet10Button", 240, 382, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this);
            // add Bet100Button to the scene
            this._bet100Button = new objects.Button("Bet100Button", 312, 382, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this);
            // add SpinButton to the scene
            this._spinButton = new objects.Button("SpinButton", 380, 375, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            // Setup Background
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLOT_MACHINE Scene updates here
        SlotMachine.prototype.update = function () {
        };
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        SlotMachine.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        SlotMachine.prototype._spinReels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):
                        betLine[spin] = "Blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37):
                        betLine[spin] = "Magikarp";
                        this._magikarps++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46):
                        betLine[spin] = "Voltorb";
                        this._voltorbs++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54):
                        betLine[spin] = "Jigglypuff";
                        this._jigglypuffs++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59):
                        betLine[spin] = "Pikachu";
                        this._pikachus++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62):
                        betLine[spin] = "Charizard";
                        this._charizards++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64):
                        betLine[spin] = "Raikou";
                        this._raikous++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65):
                        betLine[spin] = "Articuno";
                        this._articunos++;
                        break;
                }
            }
            return betLine;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        SlotMachine.prototype._bet1ButtonClick = function (event) {
            console.log("Bet 1 Credit");
        };
        SlotMachine.prototype._bet10ButtonClick = function (event) {
            console.log("Bet 10 Credit");
        };
        SlotMachine.prototype._bet100ButtonClick = function (event) {
            console.log("Bet 100 Credit");
        };
        SlotMachine.prototype._spinButtonClick = function (event) {
            console.log("Reels spun");
            //console.log(this._reels());
            var pokemon = this._spinReels();
            //pass string from pokemon array into new element and add that element into reels
            this._reels[0].image = assets.getResult(pokemon[0]); //now needs to be added to scene.
            this._reels[0].x = 193;
            this._reels[0].y = 217;
            this.addChild(this._reels[0]);
            //For debugging later
            console.log(pokemon[0]);
            console.log(pokemon[1]);
            console.log(pokemon[2]);
            console.log(this.numChildren);
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map