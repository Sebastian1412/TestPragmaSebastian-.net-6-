$(document).ready(function () {
    var table = $('#Tablausuarios').DataTable({
        "paging": true,
        "searching": true,
        "ordering": true,
        "info": false,
        "lengthChange": false,
        "pageLength": 10,
        "dom": 'lBfrtip',
        "buttons": [{
            extend: 'excel',
            text: 'Exportar <i class="bi bi-file-earmark-excel"></i>'
        }],
        "ajax": {
            "url": "ruta/a/tu/api_o_archivo.json",
            "dataSrc": ""  
        },
        initComplete: function () {
            var btnExcel = $('.buttons-excel');
            btnExcel.removeClass('btn-secondary').addClass('btn-success');
            $('.dt-buttons').addClass('float-left');
        },
        "columns": [
            { "data": "ID" },
            { "data": "Nombre" },
            { "data": "RUT" },
            { "data": "Correo" },
            { "data": "Fecha de Nacimiento" },
            { "data": "Acciones" }
        ]
    });
});