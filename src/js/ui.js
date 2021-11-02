import { saveAs } from 'file-saver';

export const selectTab = (tabName) => {
  const tabcontent = Array.from(document.getElementsByClassName('tabcontent'));
  tabcontent.forEach((tab) => { tab.style.display = 'none'; });

  const tablinks = Array.from(document.getElementsByClassName('tablinks'));
  tablinks.forEach((tab) => {
    tab.className = tab.className.replace(' active', '');
  });

  // eslint-disable-next-line no-restricted-globals
  event.currentTarget.className += ' active';
  document.getElementById(tabName).style = 'display: flex;';
};

const assignFunctionToButtons = () => {
  const buttons = document.getElementsByClassName('tablinks');
  buttons[0].onclick = () => selectTab('typecheck');
  buttons[1].onclick = () => selectTab('intermediatecode');
  buttons[2].onclick = () => selectTab('mipscode');
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

  lineCodes.forEach((line) => {
    const p = document.createElement('p');
    p.innerHTML = `${line}`;
    tabContent.appendChild(p);
  });
};

export const renderMipsBtns = (mipsCode) => {
  const mipsTab = document.getElementById('mipscode');
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'mipsButtons';

  // download button
  const downloadBtn = document.createElement('button');
  const blob = new Blob(
    [mipsCode.join('\n')],
    { type: 'text/plain; charset=utf-8' },
  );
  downloadBtn.innerHTML = 'DOWNLOAD FILE';
  downloadBtn.setAttribute('download', blob);
  downloadBtn.onclick = () => saveAs(blob, 'MIPS.asm');

  // clipboard button
  const clipboardBtn = document.createElement('button');
  clipboardBtn.innerHTML = 'COPY TO CLIPBOARD';
  clipboardBtn.onclick = () => navigator.clipboard.writeText([mipsCode.join('\n')]);

  // append buttons
  buttonsDiv.appendChild(downloadBtn);
  buttonsDiv.appendChild(clipboardBtn);
  mipsTab.appendChild(buttonsDiv);
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
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p.className = 'no-errors';
    p.innerHTML = 'No errors!';
    p2.innerHTML = ' - Intermediate-Code generated';
    p3.innerHTML = ' - MIPS generated';
    details.appendChild(outputTag);
    details.appendChild(p);
    details.appendChild(p2);
    details.appendChild(p3);
  }
};

export default assignFunctionToButtons;
