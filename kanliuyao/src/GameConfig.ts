/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GameUI from "./script/GameUI"
import GameControl from "./script/GameControl"
import Bullet from "./script/Bullet"
import DropBox from "./script/DropBox"
import { CircleCollider } from "laya/physics/CircleCollider"
import { RigidBody } from "laya/physics/RigidBody"
import { BoxCollider } from "laya/physics/BoxCollider"
import { Text } from "laya/display/Text"
import { ClassUtils } from "laya/utils/ClassUtils";
import { ui } from "./ui/layaMaxUI";
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="test/TestScene.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = ClassUtils.regClass;
		reg("ui", ui);
        reg("script/GameUI.ts",GameUI);
        reg("script/GameControl.ts",GameControl);
        reg("script/Bullet.ts",Bullet);
        reg("script/DropBox.ts",DropBox);
        reg("laya.physics.CircleCollider",CircleCollider);
        reg("laya.physics.RigidBody",RigidBody);
        reg("laya.physics.BoxCollider",BoxCollider);
        reg("laya.display.Text",Text);
    }
}
GameConfig.init();