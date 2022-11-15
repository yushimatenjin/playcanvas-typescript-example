import { createScript } from "../utils/createScriptDecorator";
import { ScriptTypeBase } from "../types/ScriptTypeBase";
import { ebEvents, lifecycleEvents } from "../utils/events";

@createScript("Player")
class Player extends ScriptTypeBase {
  initialize() {
    this.app.on(ebEvents["jump"], this.jump, this);
    this.on?.(lifecycleEvents.destroy, this.onDestroy, this);
  }

  jump() {
    alert(`alert!`);
  }

  onDestroy() {
    this.app.off(ebEvents["jump"], this.jump, this);
  }
}

export default Player;
