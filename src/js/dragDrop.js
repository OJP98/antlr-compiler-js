import editor from './aceConfig';

const onFileLoad = (evtName) => {
  // document.getElementById('editor').innerText = evtName.target.result;
  editor.setValue(evtName.target.result);
};

const handleDrop = (e) => {
  const { dataTransfer } = e;
  const { files } = dataTransfer;
  const fileArray = [...files];
  const reader = new FileReader();
  reader.readAsText(fileArray[0], 'UTF-8');
  reader.onload = onFileLoad;
};

const dragDrop = () => {
  const droparea = document.querySelector('.app_editor');

  const active = () => droparea.classList.add('blue-border');

  const inactive = () => droparea.classList.remove('blue-border');

  const prevents = (e) => e.preventDefault();

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((evtName) => {
    droparea.addEventListener(evtName, prevents);
  });

  ['dragenter', 'dragover'].forEach((evtName) => {
    droparea.addEventListener(evtName, active);
  });

  ['dragleave', 'drop'].forEach((evtName) => {
    droparea.addEventListener(evtName, inactive);
  });

  droparea.addEventListener('drop', handleDrop);
};

export default dragDrop;
