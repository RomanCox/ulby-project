import React, { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import axios from 'axios';

interface CityType {
    cityCode: string;
    cityId: string;
    cityName: string;
    cityType: string;
    countryCode: string;
    countryName: string;
    regionCode: string;
    regionName: string;
}

const SoapPage = () => {
    const initialData = {
        clientNumber: 1158000268,
        key: 'EF601DF80BAEF8720F74A933322F3A621132999D',
        pickUpCityId: 49694167,
        pickUpIndex: 195273,
        pickUpCityName: 'Санкт-Петербург',
        pickUpRegionCode: 78,
        pickUpCountryCode: 'RU',
        deliveryCityId: 0,
        deliveryIndex: 613310,
        deliveryCityName: '',
        deliveryRegionCode: 0,
        deliveryCountryCode: '',
        selfPickup: false,
        selfDelivery: false,
        weight: 0.8,
        length: 300,
        width: 1,
        height: 6,
        quantity: 1,
    };
    const [data, setData] = useState(initialData);

    const cityName = 'москва';

    const cityInfoRequest = async () => {
        await axios.get(`http://localhost:8000/cityinfo?cityname=${cityName}`)
            .then((res) => {
                const newData = {
                    ...data,
                    deliveryCityId: +res.data[0].cityId,
                    deliveryCityName: res.data[0].cityName,
                    deliveryRegionCode: +res.data[0].regionCode,
                    deliveryCountryCode: res.data[0].countryCode,
                };
                setData(newData);
            });
        // await axios.put('http://localhost:8000/cityinfo', { cityName })
        //     .then((res) => console.log(res.data));
    };

    const costRequest = async () => {
        await axios.post<CityType[]>('http://localhost:8000/cost', data)
            .then((res) => console.log(res.data));
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={cityInfoRequest}>CityInfo</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={costRequest}>Cost</Button>
        </div>
    );
};

export default SoapPage;
