const selectTab = (tabName) => {
  const tabcontent = Array.from(document.getElementsByClassName('tabcontent'));
  tabcontent.forEach((tab) => { tab.style.display = 'none'; });

  const tablinks = Array.from(document.getElementsByClassName('tablinks'));
  tablinks.forEach((tab) => {
    tab.className = tab.className.replace(' active', '');
  });

  // eslint-disable-next-line no-restricted-globals
  event.currentTarget.className += ' active';
  document.getElementById(tabName).style.display = 'block';
};

const assignFunctionToButtons = () => {
  const buttons = document.getElementsByClassName('tablinks');
  buttons[0].onclick = () => selectTab('typecheck');
  buttons[1].onclick = () => selectTab('intermediatecode');
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export const assignCodeToTab = (lineCodes, tabName) => {
  const tabContent = document.getElementById(tabName);
  removeAllChildNodes(tabContent);

  if (!lineCodes.length) {
    const p = document.createElement('p');
    p.innerHTML = 'Please review type check for errors!';
    p.style = 'color: var(--red);';
    tabContent.appendChild(p);
    return;
  }

  let counter = 1;
  lineCodes.forEach((line) => {
    const p = document.createElement('p');
    p.innerHTML = `${counter}. ${line}`;
    p.style = 'margin: 0.3rem';
    tabContent.appendChild(p);
    counter += 1;
  });
};

export const renderErrors = (errors) => {
  const details = document.getElementById('typecheck');
  removeAllChildNodes(details);

  if (errors.length) {
    const errorMsg = document.createElement('p');
    errorMsg.style = 'color: var(--red);';
    errorMsg.innerHTML = 'Errors:';
    details.appendChild(errorMsg);
    let counter = 1;
    errors.forEach((err) => {
      console.error(err);
      const p = document.createElement('p');
      p.innerHTML = `${counter}. ${err}`;
      p.style = 'color: white;';
      details.appendChild(p);
      counter += 1;
    });
  } else {
    const outputTag = document.createElement('h2');
    outputTag.innerHTML = 'output';
    const p = document.createElement('p');
    p.className = 'no-errors';
    p.innerHTML = 'No errors!';
    details.appendChild(outputTag);
    details.appendChild(p);
    console.info('No errors found!');
  }
};

export default assignFunctionToButtons;
