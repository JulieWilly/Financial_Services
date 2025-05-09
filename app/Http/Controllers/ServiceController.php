<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Js;

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

    public function getService(Request $req) {
        try{
            $id = $req->id;
            $qry = DB::table('services')->where(array('id' => $id));
            $resp = $qry->get();
            $res = array(
                'sucess' => true,
                'data' => $resp,
                'message' => 'All is well'
            );

        }catch(\Exception $exception){
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

    public function updateService(Request $req){
        try{
            $id = $req->id;
            // receive data from the front end.
            $updateData = [
                'name' => $req->name,
                'description' => $req->description,
                'type' => $req->type,
                'status' =>$req->status
            ];

            // get table
            $table_name = DB::table('services');
            $qry = $table_name->where(array('id' => $id))->update($updateData);

            $resp = $qry;
            $res = array(
                'success' => true,
                'data' => $resp,
                'message' => 'All is well'
            );

        } catch(\Exception $exception){
            $res = array(
                'error' => $exception
            );
        } catch(\Throwable $throwable) {
            $res = array(
                'throwable' => $throwable
            );
        }
        return response()->json($res);
    }
}
