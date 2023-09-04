import React from 'react';

const SoapPage = () => {
    const key = 'EF601DF80BAEF8720F74A933322F3A621132999D';

    const soap = () => {
        var xmlhttp = new XMLHttpRequest();
        var sr =
            '<?xml version="1.0" encoding="utf-8"?>' +
            `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v="http://www.omkit.ru/tfs/omniintegration/v1"> \
            <soapenv:Header/> \
            <soapenv:Body> \
            <ns:getCitiesCashPay> \
            <request> \
            <auth> \
            <clientNumber>?</clientNumber> \
            <clientKey>${key}</clientKey> \
            </auth> \
            <countryCode>?</countryCode> \
            </request> \
            </ns:getCitiesCashPay> \
            </soapenv:Body> \
            </soapenv:Envelope>`;

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    alert('done. use firebug/console to see network response');
                }
            }
        }
        // Send the POST request

        xmlhttp.withCredentials = true;
        xmlhttp.open('POST', 'http://wstest.dpd.ru/services/geography2?wsd', true);
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    alert(xmlhttp.responseXML.getElementById('GetLinksToWIOneSResult'));
                }
            }
        };
    }

    return (
        <div>
            <button onClick={soap}>SOAP</button>
        </div>
    );
};

export default SoapPage;