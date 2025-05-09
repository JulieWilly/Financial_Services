<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function PHPSTORM_META\type;

class ServiceController extends Controller
{
    public function createService(Request $request) {

        try{
            // collect data to insert in the database.
            $serviceData = [
                'description' => $request->description,
                'name'=> $request->name,
                'status' =>$request->status,
                'type' => $request->type
            ];

            // insert in the relevant table. 
            $table_name = DB::table('services');
            $qry = $table_name->insert($serviceData);

            $resp = $qry;

        $res = array(
            'success'=>true,
            'data' =>$resp,
            'message'=> 'All is well'
        );
            
        } catch(\Exception $e){

            $res = array(
                'error' => $e
            );

        }catch(\Throwable $throwable){
            $res = array(
                'error' => $throwable
            );
        }
       return response()->json($res);
    }

    public function getServices(){

        try{
            $table = DB::table('services');
            $qry = $table->get();
            $res = array(
                'success' => true,
                'data' => $qry,
                'message' => 'All is well'
            );
        } catch(\Exception $exception){
            $res = array(
                'message' => $exception
            );
        } catch(\Throwable $throwable){
            $res = array(
                'message' => $throwable
            );
        }
        return response()->json($res);
    }
}
