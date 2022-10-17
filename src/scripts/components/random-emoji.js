class RandomEmoji extends HTMLElement {
  constructor() {
    super();

    this.emojiLists = [
      '(;-;)',
      '\\(o_o)/',
      '\\(^Д^)/',
      '(≥o≤)',
      '(^-^*)',
      '(>_<)',
    ];

    this.render();
  }

  get random() {
    const randomIndex = Math.floor(Math.random() * this.emojiLists.length);

    return document.createTextNode(this.emojiLists[randomIndex]);
  }

  render() {
    const span = document.createElement('span');

    span.appendChild(this.random);
    this.append(span);
  }
}

export default RandomEmoji;
