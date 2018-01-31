var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 25, "skin": "ui/back.png" } }, { "type": "Box", "props": { "y": 195, "x": 152, "name": "item0" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 10, "width": 111, "skin": "ui/mouse_normal_1.png", "name": "normal", "height": 104 } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-01.png" } }, { "type": "Image", "props": { "y": 19, "x": 99, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 186, "x": 339, "name": "item1" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-02.png" } }, { "type": "Image", "props": { "y": 16, "x": 90, "width": 86, "skin": "ui/score_2.png", "pivotY": 10, "pivotX": 30, "name": "scoreImg", "height": 30 } }] }, { "type": "Box", "props": { "y": 196, "x": 530, "name": "item2" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-03.png" } }, { "type": "Image", "props": { "y": 26, "x": 104, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 283, "x": 121, "name": "item3" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-04.png" } }, { "type": "Image", "props": { "y": 23, "x": 112, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 285, "x": 342, "name": "item4" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-05.png" } }, { "type": "Image", "props": { "y": 20, "x": 109, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 287, "x": 545, "name": "item5" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-06.png" } }, { "type": "Image", "props": { "y": 27, "x": 104, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 382, "x": 122, "name": "item6" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-07.png" } }, { "type": "Image", "props": { "y": -23, "x": 74, "width": 86, "skin": "ui/score_2.png", "pivotY": -26, "pivotX": 20, "name": "scoreImg", "height": 30 } }] }, { "type": "Box", "props": { "y": 381, "x": 341, "name": "item7" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-08.png" } }, { "type": "Image", "props": { "y": 22, "x": 108, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 385, "x": 560, "name": "item8" }, "child": [{ "type": "Image", "props": { "x": 10, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 15, "x": 7, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "y": 80, "skin": "ui/mask-09.png" } }, { "type": "Image", "props": { "y": 22, "x": 99, "skin": "ui/score_2.png", "name": "scoreImg", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "ProgressBar", "props": { "y": 10, "x": 5, "width": 257, "var": "timeBar", "skin": "ui/progress_time.png", "height": 23 } }, { "type": "Box", "props": { "y": 49, "x": 33, "var": "scoreNums" }, "child": [{ "type": "Clip", "props": { "width": 17, "skin": "ui/clip_number.png", "name": "item0", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 17, "width": 17, "skin": "ui/clip_number.png", "name": "item1", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 34, "width": 17, "skin": "ui/clip_number.png", "name": "item2", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 51, "width": 17, "skin": "ui/clip_number.png", "name": "item3", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 68, "width": 17, "skin": "ui/clip_number.png", "name": "item4", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 85, "width": 17, "skin": "ui/clip_number.png", "name": "item5", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 102, "width": 17, "skin": "ui/clip_number.png", "name": "item6", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 119, "width": 17, "skin": "ui/clip_number.png", "name": "item7", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 136, "width": 17, "skin": "ui/clip_number.png", "name": "item8", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 153, "width": 17, "skin": "ui/clip_number.png", "name": "item9", "height": 22, "clipX": 10 } }] }] };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
(function (ui) {
    var GameOverUI = /** @class */ (function (_super) {
        __extends(GameOverUI, _super);
        function GameOverUI() {
            return _super.call(this) || this;
        }
        GameOverUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameOverUI.uiView);
        };
        GameOverUI.uiView = { "type": "View", "props": { "width": 500, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "skin": "ui/overBg.png", "sizeGrid": "9,11,8,10", "height": 400 } }, { "type": "Image", "props": { "y": 33, "x": 23, "skin": "ui/total Score2 - 副本.png" } }, { "type": "Button", "props": { "y": 279, "x": 278, "var": "restartBtn", "stateNum": 2, "skin": "ui/btn_restart.png" } }, { "type": "Box", "props": { "y": 189, "x": 165, "var": "scoreNums" }, "child": [{ "type": "Clip", "props": { "width": 17, "skin": "ui/clip_number.png", "name": "item0", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 17, "width": 17, "skin": "ui/clip_number.png", "name": "item1", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 34, "width": 17, "skin": "ui/clip_number.png", "name": "item2", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 51, "width": 17, "skin": "ui/clip_number.png", "name": "item3", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 68, "width": 17, "skin": "ui/clip_number.png", "name": "item4", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 85, "width": 17, "skin": "ui/clip_number.png", "name": "item5", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 102, "width": 17, "skin": "ui/clip_number.png", "name": "item6", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 119, "width": 17, "skin": "ui/clip_number.png", "name": "item7", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 136, "width": 17, "skin": "ui/clip_number.png", "name": "item8", "height": 22, "clipX": 10 } }, { "type": "Clip", "props": { "x": 153, "width": 17, "skin": "ui/clip_number.png", "name": "item9", "height": 22, "clipX": 10 } }] }] };
        return GameOverUI;
    }(View));
    ui.GameOverUI = GameOverUI;
})(ui || (ui = {}));
(function (ui) {
    var GameStartUI = /** @class */ (function (_super) {
        __extends(GameStartUI, _super);
        function GameStartUI() {
            return _super.call(this) || this;
        }
        GameStartUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameStartUI.uiView);
        };
        GameStartUI.uiView = { "type": "View", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 55, "x": 38, "skin": "ui/help.png" } }, { "type": "Button", "props": { "y": 407, "x": 480, "var": "startBtn", "stateNum": 2, "skin": "ui/btn_start.png" } }] };
        return GameStartUI;
    }(View));
    ui.GameStartUI = GameStartUI;
})(ui || (ui = {}));
(function (ui) {
    var HammerUI = /** @class */ (function (_super) {
        __extends(HammerUI, _super);
        function HammerUI() {
            return _super.call(this) || this;
        }
        HammerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HammerUI.uiView);
        };
        HammerUI.uiView = { "type": "View", "props": { "width": 100, "height": 100 }, "child": [{ "type": "Image", "props": { "y": 58, "x": 58, "width": 98, "skin": "ui/hammer.png", "pivotY": 49, "pivotX": 56, "height": 77 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 61, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 1 }, { "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 5 }], "x": [{ "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }], "rotation": [{ "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 1 }, { "value": 20, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 5 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
        return HammerUI;
    }(View));
    ui.HammerUI = HammerUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map