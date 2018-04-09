<?php

namespace GenderAPI;

class GenderAPI
{
    const API_URL = 'https://api.genderapi.io';
    private $dataURL;
    private $clientKey;

    public function __construct($clientKey)
    {
        $this->clientKey = $clientKey;
        $this->dataURL = GenderAPI::API_URL.'/?key='.$clientKey;
    }

    public function find($name)
    {
        $data = json_decode(file_get_contents($this->dataURL.'&name='.urlencode($name)));
        return $data;
    }

}