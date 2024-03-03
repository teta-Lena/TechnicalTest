const formatEmail = (data) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Irembo Business Registration</title>
        <style>
            div.container p {
                color: black;
                font-size: 17px;
            }
    
            div.container span {
                font-weight: bold;
            }
    
            div.info-container {
                width: 70%;
                background-color: #dee0e3;
                border: 1px solid #dee0e3;
                border-radius: 5px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Registration Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
            text-align: left;
        }
        .info-container {
            margin-top: 20px;
        }
        .info-container p {
            margin: 5px 0;
        }
        .info-container p span {
            font-weight: bold;
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
    <p>
    Hi there, <br>
    We've successfully registerd your business! <br>
    Below is the information you provided.
    My Github Repository: https://github.com/teta-Lena/TechnicalTest.git
    </p>
    
        <h2 style="text-align: center;">Business Registration Confirmation</h2>
        <table>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            <tr>
                <td><span>Citizenship Information</span></td>
                <td>${data.citizenship}</td>
            </tr>
            <tr>
                <td><span>Phone</span></td>
                <td>${data.phone}</td>
            </tr>
            <tr>
                <td><span>Company Name</span></td>
                <td>${data.company}</td>
            </tr>
            <tr>
                <td><span>Owner Address</span></td>
                <td>${data.owneraddress}</td>
            </tr>
            <tr>
                <td><span>Business Type</span></td>
                <td>${data.business_type}</td>
            </tr>
            <tr>
                <td><span>Business Address</span></td>
                <td>${data.businessaddress}</td>
            </tr>
            <tr>
                <td><span>Business TIN Number</span></td>
                <td>${data.TIN_number}</td>
            </tr>
            <tr>
                <td><span>Business Registration Date</span></td>
                <td>${data.date}</td>
            </tr>
            <tr>
                <td><span>Importation Purpose</span></td>
                <td>${data.purpose_of_importation}</td>
            </tr>
            <tr>
                <td><span>Weight</span></td>
                <td>${data.weight}</td>
            </tr>
            <tr>
                <td><span>Product Category</span></td>
                <td>${data.product_category}</td>
            </tr>
            <tr>
                <td><span>Product Quantity</span></td>
                <td>${data.qty}</td>
            </tr>
            <tr>
                <td><span>Product Description</span></td>
                <td>${data.description}</td>
            </tr>
        </table>
        <p><span>Checked by:</span> Peter Charles @Irembo</p>
    </div>
</body>
</html>
    `;

  return html;
};

module.exports = formatEmail;
