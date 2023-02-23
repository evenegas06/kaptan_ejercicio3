<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class IMDbController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @param string $expression Expression for search.
     * @return \Illuminate\Http\Response
     */
    public function index($expression) {
        $search_url     = getenv('IMDB_API_URL') . "en/API/Search/" . getenv('API_KEY') . "/$expression";
        $coincidences   = Http::get($search_url)->json();

        $coincidences_ids = array_column($coincidences['results'], 'id');
        $coincidences_ids = array_slice($coincidences_ids, 0, 8);

        $cards_info = [];
        foreach ($coincidences_ids as $id) {
            $title_url  = getenv('IMDB_API_URL') . "en/API/Title/" . getenv('API_KEY') . "/$id/Ratings";
            $title_info = Http::get($title_url)->json();

            $cards_info[] = [
                'id'        => $id,
                'title'     => $title_info['title'],
                'year'      => $title_info['year'],
                'rating'    => $title_info['ratings']['imDb']
            ];
        }
        return response()->json($cards_info);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        $title_url  = getenv('IMDB_API_URL') . "en/API/Title/" . getenv('API_KEY') . "/$id/Ratings";
        $title_info = Http::get($title_url)->json();

        $card_info = [
            'title'         => $title_info['title'],
            'year'          => $title_info['year'],
            'duration'      => $title_info['runtimeStr'],
            'genres'        => $title_info['genres'],
            'rating'        => $title_info['ratings']['imDb'],
            'description'   => $title_info['plot'],
            'starList'      => $title_info['starList'],
            'poster'        => $title_info['image'],
        ];
        return response()->json($card_info);
    }
}
