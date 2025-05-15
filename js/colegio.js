    $(document).ready(function () {
      const tabla = $('#tablaNotas').DataTable({
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
        }
      });

      $('#formAlumno').on('submit', function (e) {
        e.preventDefault();

        const nombre = $('#nombreAlumno').val().trim();
        const curso = $('#cursoAlumno').val();
        const asignatura = $('#asignaturaAlumno').val().trim();
        const nota = parseFloat($('#notaAlumno').val()).toFixed(1);
        const estado = $('#estadoAlumno').val();

        if (!nombre || !curso || !asignatura || isNaN(nota) || !estado) {
          alert('Por favor complete todos los campos correctamente.');
          return;
        }

        const badgeClass = estado === 'Aprobado' ? 'bg-success' : 'bg-danger';
        const badgeHtml = `<span class="badge ${badgeClass}">${estado}</span>`;

        tabla.row.add([nombre, curso, asignatura, nota, badgeHtml]).draw();

        this.reset();
      });
    });