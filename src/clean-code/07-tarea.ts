(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {
        this.id = id;
        this.type = type;
      }
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {
        this.value = value;
        this.placeholder = placeholder;
      }
  }

  class InputEvents {

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }


  //? Idea para la nueva clase InputElement

  class InputElement {
    public input : HtmlElement;
    public attributes : InputAttributes;
    public events : InputEvents;

    constructor(
      value: string,
      placeholder: string,
      id: string,
    ) {
      this.input = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField2 = new InputElement('Josue', 'Enter first name', 'txtName');

  // const nameField = new InputEvents('Josue', 'Enter first name', 'txtName');

  console.log({ nameField2 });

})()