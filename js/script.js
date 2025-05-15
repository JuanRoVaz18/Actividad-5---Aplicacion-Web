$(document).ready(function() {
            $('#tabla').DataTable();
        });

        function agregarFila() {
            var selectOption = $('#selectOption').val();
            var textInput = $('#textInput').val();
            var checkboxInput = $('#checkboxInput').is(':checked') ? 'Sí' : 'No';
            var numberInput = $('#numberInput').val();

            if (textInput === '' || numberInput === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            var table = $('#tabla').DataTable();
            table.row.add([
                selectOption,
                textInput,
                checkboxInput,
                numberInput
            ]).draw();

            $('#formulario')[0].reset();
            $('#checkboxInput').prop('checked', false); 
        }