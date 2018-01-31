class GameStart extends ui.GameStartUI{
    constructor() {
        super();
        this.startBtn.on(Laya.Event.CLICK,this,this.startGame);
        Laya.SoundManager.playSound("res/sound/start.mp3");
    }
    //开始游戏
    startGame():void{
        Laya.SoundManager.stopSound("res/sound/start.mp3");
        this.removeSelf();
        if(!GameMain.gameView){
            GameMain.gameView = new GameView();
        }
        GameMain.gameView.startGame();
        Laya.stage.addChild(GameMain.gameView);
     }
}