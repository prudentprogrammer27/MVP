
const ORCL_btn = document.getElementById('Oracle');
const HD_btn = document.getElementById('Home Depot');
const WM_btn = document.getElementById('Waste Management');

const displayAlert = (message) => {
    alert(message);
};
fetch('/path') 
    .then(res)
    .then(data)
        data.foreach
    .catch(error)
// const fetchData = async (stockId) => {
//     try {
//       const response = await fetch(`/prices/${stockId}`);
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
// };

const handleButtonClick = (stockId) => {
    displayAlert('Stock prices charted below!');
    fetchData(stockId);
};


ORCL_btn.addEventListener('click', () => handleButtonClick('1'));
HD_btn.addEventListener('click', () => handleButtonClick('2'));
WM_btn.addEventListener('click', () => handleButtonClick('3'));



















