import { createScript } from "../utils/createScriptDecorator";
import { ScriptTypeBase } from "../types/ScriptTypeBase";
import { ebEvents } from "../utils/events";

@createScript("JumpButton")
class JumpButton extends ScriptTypeBase {
  initialize() {

    this.entity.button?.on("click", () => {
      this.app.fire(ebEvents["jump"]);
    }, this);

  }
}

export default JumpButton;
