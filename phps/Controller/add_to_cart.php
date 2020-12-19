<?php

include __DIR__.'/../Model/connect.php';

session_start();

$product=$_GET['product'];
$qty=$_GET['qty'];
$userid=$_SESSION['userid'];

$query='SELECT prodid,mrp from products where name="'.$product.'"';

if($res=mysqli_query($conn,$query)){

    $row=mysqli_fetch_array($res);
    $prodid=$row['prodid'];
    $mrp=$row['mrp'];

    $query1="INSERT into cart(userid,prodid,qty) values ( $userid, $prodid, $qty)ON DUPLICATE KEY UPDATE qty = qty + ".$qty."";

    if($conn->query($query1)==TRUE){
        header("location: /petshop_management/home.html");
    }else{
        echo "fail".$conn->error;
    }

}
else{
    echo "failure";
}


?>
