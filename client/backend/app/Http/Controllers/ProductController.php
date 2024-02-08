<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Product; // Import the Product model

class ProductController extends Controller
{
  public function stores(Request $request)
  {
    $request->validate([
      'name' => 'required|string',
      'price' => 'required|numeric',
      'description' => 'required|string',
      'category'=>'required|string',
      'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $product = new Product([
      'name' => $request->name,
      'price' => $request->price,
      'description' => $request->description,
      'category'=>$request->category,
    ]);

    if ($request->hasFile('image')) {
      $image = $request->file('image');
      $imageName = time() . '.' . $image->getClientOriginalExtension();
      $path = $image->storeAs('products', $imageName);
      $product->image = $path;
    }

    $product->save();

    return $product;
  }
}
