import { createScript, attrib } from "../utils/createScriptDecorator";
import { ScriptTypeBase } from "../types/ScriptTypeBase";

@createScript("CustomEventButton")
class CustomEventButton extends ScriptTypeBase {
  @attrib({ type: "string" })
  eventName: string;

  initialize() {

    this.entity.button?.on("click", () => {
      this.app.fire(this.eventName);
    }, this);

  }
}

export default CustomEventButton;
