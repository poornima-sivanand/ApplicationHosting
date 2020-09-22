function calculateTotalPrice()
{
        choice1 = document.getElementById("frontend").value;
        choice2 = document.getElementById("dev&testfrontend").value;
        choice3 = document.getElementById("database").value;
        choice4 = document.getElementById("dev&testdatabase").value;
        choice5 = document.getElementById("middleware").value;
        choice6 = document.getElementById("dev&testmiddleware").value;
        choice7 = document.getElementById("storage").value;
        choice8 = document.getElementById("dev&teststorage").value;

        switch(choice1) {
            case "lt1s":
              price1 = 945
              break;
            case "lt1m":
                price1 = 1095
              break;
            case "lt1m":
                price1 = 1630
              break;
            case "lt1m":
                price1 = 720
              break;
            case "lt1m":
                price1 = 780
              break;
            case "lt1m":
                price1 = 1055
              break;
            case "lt1m":
                price1 = 710
              break;
            case "lt1m":
                price1 = 754
              break;
            case "lt1m":
                price1 = 1010
              break;
          }
        document.getElementById("result").innerHTML = price1;
}
