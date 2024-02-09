<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductControllers extends Controller
{
    //
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }
    
}
