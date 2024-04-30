$(document).ready(function () {
    var table = $('#Tablausuarios').DataTable({
        "paging": true,
        "searching": true,
        "ordering": true,
        "info": false,
        "lengthChange": false,
        "pageLength": 10,  
        "dom": 'lBfrtip', 
        "buttons": [
            {
                extend: 'excel',
                text: 'Exportar <i class="bi bi-file-earmark-excel"></i>'
            }
        ],
        initComplete: function () {
            var btnExcel = $('.buttons-excel');
            btnExcel.removeClass('btn-secondary').addClass('btn-success');
            $('.dt-buttons').addClass('float-left');
        }
    });
});
