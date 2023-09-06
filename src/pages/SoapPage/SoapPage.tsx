import React from 'react';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const SoapPage = () => {
    const clientNumber = 1158000268;
    const key = 'EF601DF80BAEF8720F74A933322F3A621132999D';
    const pickUpCityId = 49694167;
    const pickUpIndex = 195273;
    const pickUpCityName = 'Санкт-Петербург';
    const pickUpRegionCode = 78;
    const pickUpCountryCode = 'RU';
    const deliveryCityId = 195736831;
    const deliveryIndex = 214000;
    const deliveryCityName = 'Смоленск';
    const deliveryRegionCode = 67;
    const deliveryCountryCode = 'RU';
    const selfPickup = false;
    const selfDelivery = false;
    const weight = 0.8;
    const length = 300;
    const width = 1;
    const height = 6;
    const quantity = 1;

    const soap = () => {
        let xmlhttp = new XMLHttpRequest();

        let body =
            '<?xml version="1.0" encoding="utf-8"?>' +
            `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"> \
            <soapenv:Header/> \
            <soapenv:Body> \
            <ns:getServiceCostByParcels2 xmlns="http://dpd.ru/ws/calculator/2012-03-20"> \
            <request xmlns=""> \
            <auth> \
            <clientNumber>${clientNumber}</clientNumber> \
            <clientKey>${key}</clientKey> \
            </auth> \
            <pickup> \
            <cityId>${pickUpCityId}</cityId> \
            <index>${pickUpIndex}</index> \
            <cityName>${pickUpCityName}</cityName> \
            <regionCode>${pickUpRegionCode}</regionCode> \
            <countryCode>${pickUpCountryCode}</countryCode> \
            </pickup> \
            <delivery> \
            <cityId>${deliveryCityId}</cityId> \
            <index>${deliveryIndex}</index> \
            <cityName>${deliveryCityName}</cityName> \
            <regionCode>${deliveryRegionCode}</regionCode> \
            <countryCode>${deliveryCountryCode}</countryCode> \
            </delivery> \
            <selfPickup>${selfPickup}</selfPickup> \
            <selfDelivery>${selfDelivery}</selfDelivery> \
            <parcel> \
            <weight>${weight}</weight> \
            <length>${length}</length> \
            <width>${width}</width> \
            <height>${height}</height> \
            <quantity>${quantity}</quantity> \
            </parcel> \
            </request> \
            </ns:getCitiesCashPay> \
            </soapenv:Body> \
            </soapenv:Envelope>`;

        // Send the POST request

        xmlhttp.withCredentials = true;
        xmlhttp.open('POST', 'https://wstest.dpd.ru/services/calculator2?wsdl', true);
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        xmlhttp.send(body);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseXML);
                }
            }
        };
    }

    const soapFetch = async () => {
        const body =
            `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"> \
                <Body> \
                    <getServiceCostByParcels2 xmlns="http://dpd.ru/ws/calculator/2012-03-20"> \
                        <request xmlns=""> \
                            <auth> \
                                <clientNumber>${clientNumber}</clientNumber> \
                                <clientKey>${key}</clientKey> \
                            </auth> \
                            <pickup> \
                                <cityId>${pickUpCityId}</cityId> \
                                <index>${pickUpIndex}</index> \
                                <cityName>${pickUpCityName}</cityName> \
                                <regionCode>${pickUpRegionCode}</regionCode> \
                                <countryCode>${pickUpCountryCode}</countryCode> \
                            </pickup> \
                            <delivery> \
                                <cityId>${deliveryCityId}</cityId> \
                                <index>${deliveryIndex}</index> \
                                <cityName>${deliveryCityName}</cityName> \
                                <regionCode>${deliveryRegionCode}</regionCode> \
                                <countryCode>${deliveryCountryCode}</countryCode> \
                            </delivery> \
                            <selfPickup>${selfPickup}</selfPickup> \
                            <selfDelivery>${selfDelivery}</selfDelivery> \
                            <parcel> \
                                <weight>${weight}</weight> \
                                <length>${length}</length> \
                                <width>${width}</width> \
                                <height>${height}</height> \
                                <quantity>${quantity}</quantity> \
                            </parcel> \
                        </request> \
                    </getServiceCostByParcels2> \
                </Body> \
            </Envelope>`;

        //let response =
        await fetch('https://wstest.dpd.ru/services/calculator2?wsdl', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml',
            },
            body: body
        }).then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            <button onClick={soapFetch}>SOAP</button>
        </div>
    );
};

export default SoapPage;