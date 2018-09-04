import UserService from './userService';

export default class Accordion {

  constructor() {
    this.service = new UserService();
    this.itemSelected = -1;
    this.init();
  }
  
  init() {
    this.service.getUsers()
      .then((data) => {
        this.renderUsers(data);
      })
      .catch((error) => {
        //
        // Here we can do whatever we need like show a custom error message or redirect to another page (for example)
        // An alert will be fine for test purpose
        //
        alert('Ops! Something was going wrong!');
        console.log(error);
        
        //
        // But, anyway, we will create something in case json-server is down to show something on screen  :)
        //
        const mockData = this.service.getMockData();
        this.renderUsers(mockData);
      });    
  }

  renderUsers(users) {
    this.toggleLoading(false)    
    this.appendDescriptionList();
    const element = document.getElementsByTagName('dl')[0];
    users.forEach((user) => {        
        this.appendNewUser(element, user);
    });       
  }

  appendDescriptionList() {
    const container = document.getElementsByClassName('container')[0];
    const descriptionList = document.createElement('dl');
    container.appendChild(descriptionList);    
  }

  toggleLoading(visibility) {
    const loading = document.getElementsByClassName('loading')[0];
    loading.style.display = visibility ? 'block' : 'none';
  }  

  appendNewUser(element, user) {
    this.appendTerms(element, user);

    const termsTag = document.getElementById(`term${user.id}`);        
    this.appendDescription(termsTag, user.id);

    const descriptionTag = document.getElementById(`desc${user.id}`);
    this.appendParagraph(descriptionTag, `Email: ${user.email}`);
    this.appendParagraph(descriptionTag, `Ip address: ${user.ip_address}`);
  }  

  appendTerms(element, user) {
    const terms = document.createElement('dt');
    terms.setAttribute('id', `term${user.id}`);
    terms.classList.add('accordion');
    terms.innerText = `${user.first_name} ${user.last_name}`;
    terms.onclick= () => {
      this.toggleItem(user.id);
    };
    element.appendChild(terms);
  }

  appendDescription(termsTag, id) {
    const description = document.createElement('dd');
    description.setAttribute('id', `desc${id}`);
    description.classList.add('panel');
    termsTag.appendChild(description);
  }

  appendParagraph(descriptionTag, value) {
    const paragraph = document.createElement('p');
    paragraph.innerText = value;
    descriptionTag.appendChild(paragraph);
  }

  //
  // toggle accordion
  //
  toggleItem(id) {
    this.removeActives();
    this.toggleActive(id);    
  }

  //
  // remove current actives. Can be deprecated
  //
  removeActives() {
    const items = document.getElementsByClassName('accordion');
    for (let item of items) {
      item.classList.remove('active');
      const child = item.firstElementChild;
      child.style.maxHeight = '0px';
    }
  }

  //
  // check if is already active or not. 
  // if its active. must be collapsed to be unactive, otherwise must be active
  //
  toggleActive(id) {
    if (this.itemSelected !== id) {
      const element = document.getElementById(`term${id}`);    
      this.setActive(element);      
      this.itemSelected = id;
    } else {
      this.itemSelected = -1;
    }
  }

  //
  // active the element selected
  //
  setActive(element) {    
    const child = element.firstElementChild;
    console.log(element.classList);
    if (element.classList.contains('active')) {
      console.log('active');
      element.classList.remove('active');
      child.style.maxHeight = null;
    } else {
      console.log('no active');
      element.classList.add('active');
      child.style.maxHeight = child.scrollHeight + "px";
    }
  }
}
