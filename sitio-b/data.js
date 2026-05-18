window.IO_DATA={
  "modules": [
    {
      "slug": "eoq-basico",
      "title": "EOQ Básico",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h",
      "examples": [
        {
          "id": "eoq-basico-ex1",
          "title": "Ejemplo 1: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=220.05\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex2",
          "title": "Ejemplo 2: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=231.57\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex3",
          "title": "Ejemplo 3: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=242.52\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex4",
          "title": "Ejemplo 4: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=252.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex5",
          "title": "Ejemplo 5: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=263.01\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex6",
          "title": "Ejemplo 6: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=272.67\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex7",
          "title": "Ejemplo 7: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=281.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex8",
          "title": "Ejemplo 8: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=291.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex9",
          "title": "Ejemplo 9: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=299.73\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "eoq-basico-ex10",
          "title": "Ejemplo 10: EOQ Básico en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Lead time constante y demanda uniforme."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=308.22\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El modelo EOQ básico responde dos preguntas de control continuo: cuánto pedir y, cuando existe lead time determinístico, cuándo volver a pedir. Su lógica central es equilibrar el costo fijo de emitir órdenes con el costo de mantener inventario. Si $Q$ es pequeño, se ordena muchas veces y aumenta $KD/Q$; si $Q$ es grande, crece el inventario promedio $Q/2$ y aumenta $hQ/2$.",
          "La función de costo relevante excluye el costo anual de compra $cD$ cuando el precio unitario no depende del tamaño del pedido, porque ese término es constante para cualquier $Q$. Por eso se minimiza normalmente $CT(Q)=KD/Q+hQ/2$. La solución se obtiene igualando el costo marginal de ordenar con el costo marginal de mantener, lo que produce $Q^*=\\sqrt{2KD/h}$.",
          "El patrón físico del inventario es un diente de sierra: llega un lote, el inventario sube a $Q$ y luego cae linealmente hasta cero por demanda constante. Con lead time $L$, el punto de reorden es $R=dL$, donde $d$ es la demanda por unidad de tiempo."
        ],
        "assumptions": [
          "Demanda determinística, conocida y aproximadamente constante durante el horizonte de planeación.",
          "Revisión continua: la empresa puede monitorear la posición de inventario y ordenar en cualquier instante.",
          "Costo fijo por orden $K$ independiente del tamaño del lote.",
          "Costo de mantenimiento $h$ constante por unidad y por periodo.",
          "No se permiten faltantes y el reabastecimiento es instantáneo en la versión básica.",
          "Precio unitario constante, sin descuentos por cantidad."
        ],
        "variables": [
          {
            "s": "$D$",
            "d": "demanda anual, unidades/año"
          },
          {
            "s": "$K$",
            "d": "costo fijo de ordenar o preparar una orden"
          },
          {
            "s": "$h$",
            "d": "costo anual de mantener una unidad en inventario"
          },
          {
            "s": "$Q$",
            "d": "cantidad pedida por ciclo"
          },
          {
            "s": "$Q^*$",
            "d": "cantidad económica de pedido"
          },
          {
            "s": "$R$",
            "d": "punto de reorden cuando el lead time es positivo"
          }
        ],
        "applications": [
          "Reposición de insumos MRO, empaques, repuestos y productos de alta rotación con demanda estable.",
          "Planeación de compras repetitivas en bodegas, farmacias, tiendas y operaciones industriales.",
          "Estimación inicial de políticas de inventario antes de incorporar descuentos, incertidumbre o restricciones de almacenamiento."
        ],
        "advantages": [
          "Es simple, transparente y fácil de auditar en Excel, Python o sistemas ERP.",
          "Permite entender el trade-off fundamental entre ordenar frecuentemente y mantener inventario.",
          "Es relativamente robusto: pequeños errores alrededor de $Q^*$ suelen tener bajo impacto en el costo total."
        ],
        "limitations": [
          "No modela demanda errática, estacionalidad fuerte ni correlación temporal.",
          "No incorpora incertidumbre de lead time ni stock de seguridad.",
          "No representa descuentos, capacidad finita de almacenamiento, obsolescencia acelerada ni restricciones de presupuesto.",
          "Puede inducir una falsa sensación de precisión si $K$ y $h$ se estiman mal."
        ],
        "validation": [
          "Comprobar que $D$, $K$ y $h$ estén en la misma unidad temporal.",
          "Verificar que el patrón de demanda sea suficientemente regular antes de aplicar EOQ.",
          "Comparar $Q^*$ contra mínimos de compra, capacidad de bodega y múltiplos de empaque.",
          "Realizar sensibilidad con $D$, $K$ y $h$ antes de fijar política."
        ]
      }
    },
    {
      "slug": "sensibilidad-eoq",
      "title": "Análisis de Sensibilidad EOQ",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h",
      "examples": [
        {
          "id": "sensibilidad-eoq-ex1",
          "title": "Ejemplo 1: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=220.05\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex2",
          "title": "Ejemplo 2: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=231.57\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex3",
          "title": "Ejemplo 3: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=242.52\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex4",
          "title": "Ejemplo 4: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=252.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex5",
          "title": "Ejemplo 5: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=263.01\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex6",
          "title": "Ejemplo 6: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=272.67\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex7",
          "title": "Ejemplo 7: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=281.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex8",
          "title": "Ejemplo 8: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=291.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex9",
          "title": "Ejemplo 9: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=299.73\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "sensibilidad-eoq-ex10",
          "title": "Ejemplo 10: Análisis de Sensibilidad EOQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Analizar variaciones ±10%, ±20% en D, K y h."
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}},\\quad CT(Q)=\\frac{D}{Q}K+\\frac{Q}{2}h$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=308.22\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El análisis de sensibilidad del EOQ estudia cómo cambian $Q^*$, el costo total y la frecuencia de órdenes cuando varían $D$, $K$ o $h$. Es especialmente útil porque estos parámetros rara vez se conocen con exactitud: $K$ puede incluir costos administrativos difíciles de medir y $h$ puede depender de capital, almacenamiento, deterioro, seguros y riesgo de obsolescencia.",
          "Como $Q^*=\\sqrt{2KD/h}$, la relación es de raíz cuadrada: un incremento de 100% en $D$ o $K$ no duplica $Q^*$, sino que lo multiplica por $\\sqrt{2}$. En cambio, un aumento en $h$ reduce $Q^*$. Esta elasticidad moderada explica la robustez práctica del modelo.",
          "La sensibilidad debe analizar dos niveles: sensibilidad de la decisión $Q^*$ y sensibilidad del desempeño $CT(Q)$. A veces $Q$ cambia visiblemente, pero el costo total casi no cambia cerca del mínimo; por eso conviene evaluar curvas de costo y no solo fórmulas."
        ],
        "assumptions": [
          "Se mantienen los supuestos EOQ básicos mientras se cambia un parámetro a la vez o en escenarios controlados.",
          "Los cambios son paramétricos: no alteran la estructura del modelo ni introducen descuentos, faltantes o incertidumbre.",
          "El costo de compra sigue siendo constante si no existen descuentos por cantidad."
        ],
        "variables": [
          {
            "s": "$\\Delta D,\\Delta K,\\Delta h$",
            "d": "variaciones absolutas o porcentuales en los parámetros"
          },
          {
            "s": "$E_{Q,D}$",
            "d": "elasticidad aproximada de $Q$ respecto a demanda"
          },
          {
            "s": "$CT(Q)$",
            "d": "costo anual relevante evaluado en una política dada"
          },
          {
            "s": "$Q/Q^*$",
            "d": "desviación relativa frente a la política óptima"
          }
        ],
        "applications": [
          "Evaluar si una política redondeada a cajas, pallets o lotes mínimos es aceptable.",
          "Medir impacto de negociaciones con proveedores que cambian costos de orden o lead time.",
          "Justificar automatización de compras si reducir $K$ permite lotes más pequeños y menor inventario promedio."
        ],
        "advantages": [
          "Ayuda a enseñar la robustez del EOQ y evita cambios operativos innecesarios por diferencias pequeñas.",
          "Permite priorizar cuáles parámetros deben estimarse con mayor rigor.",
          "Facilita escenarios gerenciales sin requerir modelos complejos."
        ],
        "limitations": [
          "No reemplaza modelos estocásticos cuando la incertidumbre es estructural.",
          "Puede ser engañoso si varios parámetros cambian simultáneamente y están correlacionados.",
          "No captura discontinuidades por descuentos, mínimos de compra o capacidad de almacenamiento."
        ],
        "validation": [
          "Construir una tabla de escenarios con variaciones ±10%, ±25% y ±50%.",
          "Graficar $CT(Q)$ alrededor de $Q^*$ para observar la planitud del mínimo.",
          "Validar que el cambio paramétrico no viole los supuestos de demanda constante y precio fijo."
        ]
      }
    },
    {
      "slug": "descuentos-eoq",
      "title": "EOQ con descuentos",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.",
      "examples": [
        {
          "id": "descuentos-eoq-ex1",
          "title": "Ejemplo 1: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=220.05\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex2",
          "title": "Ejemplo 2: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=231.57\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex3",
          "title": "Ejemplo 3: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=242.52\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex4",
          "title": "Ejemplo 4: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=252.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex5",
          "title": "Ejemplo 5: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=263.01\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex6",
          "title": "Ejemplo 6: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=272.67\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex7",
          "title": "Ejemplo 7: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=281.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex8",
          "title": "Ejemplo 8: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=291.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex9",
          "title": "Ejemplo 9: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=299.73\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "descuentos-eoq-ex10",
          "title": "Ejemplo 10: EOQ con descuentos en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Tramos: <500: $12.00; 500–999: $11.70; ≥1000: $11.40"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q*=\\sqrt{2KD/h}; luego se evalúan tramos de precio por cantidad y se elige el menor costo factible.$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=308.22\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El EOQ con descuentos por cantidad incorpora precios unitarios decrecientes por tramos. A diferencia del EOQ básico, el costo anual de compra $c_iD$ ya no es constante: pedir más puede reducir el precio unitario, pero aumenta el inventario promedio.",
          "La decisión óptima se encuentra evaluando candidatos: el EOQ factible dentro de cada tramo de precio y los puntos de quiebre donde empieza un descuento. Para cada candidato se calcula $CT_i(Q)=c_iD+KD/Q+h_iQ/2$, donde con frecuencia $h_i=ic_i$ si el costo de mantener es un porcentaje del precio.",
          "La lógica gerencial no consiste en aceptar todo descuento. Un descuento es conveniente solo si el ahorro anual de compra supera el aumento en costos de mantenimiento y cualquier restricción operativa."
        ],
        "assumptions": [
          "Demanda determinística y constante.",
          "Descuentos all-units o incrementales claramente especificados; el módulo usa el supuesto all-units salvo que se indique lo contrario.",
          "Costo de ordenar independiente del lote y costos de mantenimiento medibles por tramo.",
          "No se permiten faltantes."
        ],
        "variables": [
          {
            "s": "$c_i$",
            "d": "precio unitario en el tramo i"
          },
          {
            "s": "$b_i$",
            "d": "cantidad mínima para acceder al tramo i"
          },
          {
            "s": "$h_i$",
            "d": "costo de mantener en el tramo i"
          },
          {
            "s": "$CT_i(Q)$",
            "d": "costo total anual evaluado con el precio del tramo i"
          }
        ],
        "applications": [
          "Compras mayoristas de materias primas, medicamentos, empaques o componentes.",
          "Negociaciones proveedor-cliente donde se ofrecen escalas por volumen.",
          "Decisiones entre comprar lotes pequeños frecuentes o grandes con descuento."
        ],
        "advantages": [
          "Incluye explícitamente el costo de compra, que suele dominar el costo total.",
          "Permite evaluar descuentos con rigor y no solo por intuición comercial.",
          "Es fácil de implementar con tablas de candidatos."
        ],
        "limitations": [
          "Puede recomendar lotes grandes que exceden capacidad de almacenamiento o liquidez.",
          "Los descuentos pueden estar ligados a contratos, lead times o condiciones no modeladas.",
          "Si la demanda es incierta, un lote grande aumenta riesgo de obsolescencia o vencimiento."
        ],
        "validation": [
          "Verificar si el descuento es all-units o incremental.",
          "Evaluar todos los puntos de quiebre, no solo el EOQ del precio más bajo.",
          "Incluir restricciones físicas y financieras antes de aprobar la política."
        ]
      }
    },
    {
      "slug": "agotados-eoq",
      "title": "EOQ con agotados planificados",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*",
      "examples": [
        {
          "id": "agotados-eoq-ex1",
          "title": "Ejemplo 1: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Costo faltante b=9.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=252.50\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex2",
          "title": "Ejemplo 2: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Costo faltante b=10.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=266.05\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex3",
          "title": "Ejemplo 3: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Costo faltante b=11.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=278.92\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex4",
          "title": "Ejemplo 4: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Costo faltante b=12.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=291.20\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex5",
          "title": "Ejemplo 5: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Costo faltante b=13.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=302.97\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex6",
          "title": "Ejemplo 6: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Costo faltante b=14.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=314.29\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex7",
          "title": "Ejemplo 7: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Costo faltante b=15.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=325.20\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex8",
          "title": "Ejemplo 8: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Costo faltante b=16.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=335.75\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex9",
          "title": "Ejemplo 9: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Costo faltante b=17.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=345.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "agotados-eoq-ex10",
          "title": "Ejemplo 10: EOQ con agotados planificados en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Costo faltante b=18.00 $/u-año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h}\\frac{h+b}{b}},\\quad S^*=\\frac{h}{h+b}Q^*$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=355.90\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El EOQ con agotados permite faltantes planeados bajo el supuesto de backorders: la demanda no atendida se acumula y se satisface cuando llega el siguiente lote. El modelo diferencia entre inventario positivo y backlog, y busca balancear costos de ordenar, mantener y faltar.",
          "La política óptima define un lote $Q$ y un inventario máximo $M$ menor que $Q$; durante parte del ciclo hay inventario disponible y durante otra parte hay faltantes acumulados. La penalización $s$ representa el costo anual de estar corto una unidad, incluyendo urgencias, pérdida de goodwill, administración de pedidos pendientes o penalizaciones contractuales.",
          "No debe confundirse con ventas perdidas. Si el cliente abandona definitivamente, el modelo de backorders deja de ser apropiado y se requiere un enfoque de nivel de servicio, newsvendor o demanda perdida."
        ],
        "assumptions": [
          "Toda demanda no atendida se acepta como pedido pendiente; no hay ventas perdidas.",
          "Demanda determinística y constante.",
          "Lead time cero o conocido y compatible con la política.",
          "Costo de faltante $s$ constante por unidad-tiempo.",
          "Clientes toleran esperar y la empresa puede medir el costo del retraso."
        ],
        "variables": [
          {
            "s": "$Q$",
            "d": "lote total recibido por ciclo"
          },
          {
            "s": "$M$",
            "d": "inventario máximo disponible"
          },
          {
            "s": "$Q-M$",
            "d": "máximo backlog o faltante acumulado"
          },
          {
            "s": "$s$",
            "d": "costo de faltante por unidad-año"
          },
          {
            "s": "$h$",
            "d": "costo de mantener inventario positivo"
          }
        ],
        "applications": [
          "Repuestos industriales donde el cliente acepta entrega posterior.",
          "Producción bajo pedido con atrasos permitidos contractualmente.",
          "Componentes internos donde un área puede esperar temporalmente sin cancelar la demanda."
        ],
        "advantages": [
          "Reduce costos de mantenimiento cuando el costo de faltante es relativamente bajo.",
          "Explica cuándo aceptar backorders puede ser racional.",
          "Permite cuantificar el costo de servicio insuficiente."
        ],
        "limitations": [
          "Muy sensible a la estimación del costo de faltante, que suele ser difícil.",
          "No aplica cuando los clientes no esperan o se pierden ventas futuras.",
          "Puede deteriorar nivel de servicio y reputación aunque el costo matemático sea bajo."
        ],
        "validation": [
          "Confirmar que el proceso realmente admite backorders.",
          "Separar faltante planeado de ruptura no controlada.",
          "Comparar el backlog máximo con contratos de nivel de servicio.",
          "Realizar sensibilidad amplia sobre $s$."
        ]
      }
    },
    {
      "slug": "epq",
      "title": "EOQ de tasa continua / EPQ",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}",
      "examples": [
        {
          "id": "epq-ex1",
          "title": "Ejemplo 1: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Tasa de producción P=3105 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=295.23\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex2",
          "title": "Ejemplo 2: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Tasa de producción P=3588 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=308.02\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex3",
          "title": "Ejemplo 3: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Tasa de producción P=4089 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=319.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex4",
          "title": "Ejemplo 4: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Tasa de producción P=4608 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=331.23\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex5",
          "title": "Ejemplo 5: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Tasa de producción P=5145 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=341.88\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex6",
          "title": "Ejemplo 6: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Tasa de producción P=5700 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=352.01\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex7",
          "title": "Ejemplo 7: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Tasa de producción P=6273 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=361.68\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex8",
          "title": "Ejemplo 8: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Tasa de producción P=6864 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=370.95\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex9",
          "title": "Ejemplo 9: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Tasa de producción P=7473 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=379.85\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "epq-ex10",
          "title": "Ejemplo 10: EOQ de tasa continua / EPQ en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Tasa de producción P=8100 u/año"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{\\frac{2KD}{h(1-D/P)}}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=388.44\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El modelo EPQ o EOQ de tasa continua representa producción interna o reabastecimiento gradual. En lugar de recibir todo el lote instantáneamente, la empresa produce a una tasa $p$ mientras la demanda ocurre simultáneamente a tasa $D$. Por eso el inventario máximo es menor que $Q$: solo se acumula a la tasa neta $p-D$.",
          "La condición fundamental es $p>D$; si la tasa de producción no supera la demanda, el sistema no puede recuperar inventario. La función de costo reemplaza el inventario promedio $Q/2$ por $Q(1-D/p)/2$, lo que suele producir lotes óptimos mayores que el EOQ básico.",
          "El modelo es especialmente importante para manufactura por lotes, donde cada corrida implica preparación, limpieza, calibración o cambio de referencia."
        ],
        "assumptions": [
          "Demanda determinística, constante y menor que la tasa de producción.",
          "Producción por corridas; durante la corrida se produce y se consume simultáneamente.",
          "No se permiten faltantes en la versión estándar.",
          "Costo de preparación $K$ independiente del tamaño de corrida.",
          "La tasa de producción $p$ es constante y conocida."
        ],
        "variables": [
          {
            "s": "$p$",
            "d": "tasa de producción o reabastecimiento"
          },
          {
            "s": "$D$",
            "d": "demanda anual"
          },
          {
            "s": "$Q$",
            "d": "tamaño de corrida"
          },
          {
            "s": "$I_{max}=Q(1-D/p)$",
            "d": "inventario máximo del ciclo"
          },
          {
            "s": "$K$",
            "d": "costo de preparación"
          }
        ],
        "applications": [
          "Plantas que fabrican lotes de alimentos, piezas, empaques, químicos o productos farmacéuticos.",
          "Programación de corridas en líneas con cambios de referencia costosos.",
          "Decisión entre fabricar internamente o comprar a proveedor externo."
        ],
        "advantages": [
          "Más realista que EOQ para producción interna.",
          "Reconoce que el inventario se acumula gradualmente.",
          "Permite estudiar utilización de capacidad y número de corridas anuales."
        ],
        "limitations": [
          "No considera secuenciación de múltiples productos ni tiempos de cambio dependientes del orden.",
          "No incluye capacidad compartida, fallas de máquina ni variabilidad de producción.",
          "Si $p$ cambia por turnos o aprendizaje, la fórmula puede ser insuficiente."
        ],
        "validation": [
          "Verificar $p>D$ con unidades consistentes.",
          "Comparar días de producción por corrida contra calendario operativo.",
          "Evaluar si el inventario máximo cabe en almacenamiento.",
          "Revisar que el número de corridas sea compatible con disponibilidad de línea."
        ]
      }
    },
    {
      "slug": "incertidumbre-eoq",
      "title": "EOQ bajo incertidumbre",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L",
      "examples": [
        {
          "id": "incertidumbre-eoq-ex1",
          "title": "Ejemplo 1: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Demanda esperada en lead time=75, σL=11, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=220.05\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex2",
          "title": "Ejemplo 2: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Demanda esperada en lead time=80, σL=12, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=231.57\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex3",
          "title": "Ejemplo 3: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Demanda esperada en lead time=85, σL=13, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=242.52\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex4",
          "title": "Ejemplo 4: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Demanda esperada en lead time=90, σL=14, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=252.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex5",
          "title": "Ejemplo 5: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Demanda esperada en lead time=95, σL=15, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=263.01\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex6",
          "title": "Ejemplo 6: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Demanda esperada en lead time=100, σL=16, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=272.67\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex7",
          "title": "Ejemplo 7: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Demanda esperada en lead time=105, σL=17, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=281.98\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex8",
          "title": "Ejemplo 8: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Demanda esperada en lead time=110, σL=18, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=291.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex9",
          "title": "Ejemplo 9: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Demanda esperada en lead time=115, σL=19, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=299.73\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "incertidumbre-eoq-ex10",
          "title": "Ejemplo 10: EOQ bajo incertidumbre en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Demanda esperada en lead time=120, σL=20, z=1.65"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$Q^*=\\sqrt{2KD/h},\\quad ROP=\\mu_L+z\\sigma_L$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=308.22\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El EOQ bajo incertidumbre conserva la decisión de cuánto pedir, pero reconoce que la demanda durante el lead time puede variar. Por ello introduce punto de reorden con stock de seguridad: $R=\\mu_L+SS$, donde $\\mu_L$ es la demanda esperada durante el lead time y $SS$ protege contra variabilidad.",
          "Cuando la demanda durante el lead time se aproxima por una normal, se usa $SS=z\\sigma_L$ para alcanzar un nivel de servicio de ciclo. Si demanda diaria y lead time son independientes, pueden combinarse varianzas para obtener $\\sigma_L$.",
          "La pregunta deja de ser solo minimizar costo: también debe definirse el nivel de servicio. Un alto servicio reduce rupturas, pero aumenta capital inmovilizado y riesgo de obsolescencia."
        ],
        "assumptions": [
          "La demanda o el lead time son aleatorios, pero pueden describirse con media y desviación estándar.",
          "La política es de revisión continua $(Q,R)$ o una aproximación equivalente.",
          "El costo de ordenar y mantener se comporta como en EOQ para determinar $Q$.",
          "El nivel de servicio objetivo está definido por la gerencia."
        ],
        "variables": [
          {
            "s": "$\\mu_L$",
            "d": "demanda esperada durante lead time"
          },
          {
            "s": "$\\sigma_L$",
            "d": "desviación estándar de la demanda durante lead time"
          },
          {
            "s": "$z$",
            "d": "factor normal asociado al nivel de servicio"
          },
          {
            "s": "$SS$",
            "d": "stock de seguridad"
          },
          {
            "s": "$R$",
            "d": "punto de reorden"
          }
        ],
        "applications": [
          "Retail, salud, repuestos y distribución con incertidumbre de consumo o entrega.",
          "Productos donde una ruptura tiene impacto alto en servicio.",
          "Políticas de inventario en ERP con puntos de reorden dinámicos."
        ],
        "advantages": [
          "Integra variabilidad y servicio, elementos ausentes en EOQ determinístico.",
          "Permite comunicar riesgo de ruptura con métricas entendibles.",
          "Se adapta a datos históricos de demanda y lead time."
        ],
        "limitations": [
          "Depende de una distribución adecuada; normalidad puede fallar para demanda intermitente.",
          "El nivel de servicio de ciclo no siempre equivale a fill rate.",
          "No captura correlaciones, promociones, estacionalidad o sustituciones sin ajustes adicionales."
        ],
        "validation": [
          "Estimar media y variabilidad con datos limpios y segmentados.",
          "Distinguir demanda durante lead time de demanda anual.",
          "Validar normalidad o usar percentiles empíricos si hay asimetría.",
          "Monitorear rupturas reales y ajustar $z$ o $SS$."
        ]
      }
    },
    {
      "slug": "newsvendor",
      "title": "Newsvendor problem",
      "area": "Inventarios",
      "kind": "inventory",
      "formula": "F(Q^*)\\ge \\frac{C_u}{C_u+C_o}",
      "examples": [
        {
          "id": "newsvendor-ex1",
          "title": "Ejemplo 1: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1380,
            "Costo ordenar K ($/orden)": 50,
            "Costo mantener h ($/u-año)": 2.85,
            "Costo unitario c ($/u)": 13,
            "Dato adicional": "Cu=9.00, Co=2.33, fractil crítico=0.794"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=174.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex2",
          "title": "Ejemplo 2: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1560,
            "Costo ordenar K ($/orden)": 55,
            "Costo mantener h ($/u-año)": 3.2,
            "Costo unitario c ($/u)": 14,
            "Dato adicional": "Cu=10.00, Co=2.67, fractil crítico=0.789"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=189.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex3",
          "title": "Ejemplo 3: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1740,
            "Costo ordenar K ($/orden)": 60,
            "Costo mantener h ($/u-año)": 3.55,
            "Costo unitario c ($/u)": 15,
            "Dato adicional": "Cu=11.00, Co=3.00, fractil crítico=0.786"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=204.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex4",
          "title": "Ejemplo 4: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 1920,
            "Costo ordenar K ($/orden)": 65,
            "Costo mantener h ($/u-año)": 3.9,
            "Costo unitario c ($/u)": 16,
            "Dato adicional": "Cu=12.00, Co=3.33, fractil crítico=0.783"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=218.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex5",
          "title": "Ejemplo 5: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2100,
            "Costo ordenar K ($/orden)": 70,
            "Costo mantener h ($/u-año)": 4.25,
            "Costo unitario c ($/u)": 17,
            "Dato adicional": "Cu=13.00, Co=3.67, fractil crítico=0.780"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=233.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex6",
          "title": "Ejemplo 6: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2280,
            "Costo ordenar K ($/orden)": 75,
            "Costo mantener h ($/u-año)": 4.6,
            "Costo unitario c ($/u)": 18,
            "Dato adicional": "Cu=14.00, Co=4.00, fractil crítico=0.778"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=248.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex7",
          "title": "Ejemplo 7: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2460,
            "Costo ordenar K ($/orden)": 80,
            "Costo mantener h ($/u-año)": 4.95,
            "Costo unitario c ($/u)": 19,
            "Dato adicional": "Cu=15.00, Co=4.33, fractil crítico=0.776"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=263.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex8",
          "title": "Ejemplo 8: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2640,
            "Costo ordenar K ($/orden)": 85,
            "Costo mantener h ($/u-año)": 5.3,
            "Costo unitario c ($/u)": 20,
            "Dato adicional": "Cu=16.00, Co=4.67, fractil crítico=0.774"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=277.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex9",
          "title": "Ejemplo 9: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 2820,
            "Costo ordenar K ($/orden)": 90,
            "Costo mantener h ($/u-año)": 5.65,
            "Costo unitario c ($/u)": 21,
            "Dato adicional": "Cu=17.00, Co=5.00, fractil crítico=0.773"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=292.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        },
        {
          "id": "newsvendor-ex10",
          "title": "Ejemplo 10: Newsvendor problem en una empresa simulada",
          "statement": "Una organización debe decidir su política de inventario para un SKU de alta rotación. Los datos son simulados para práctica académica y fueron generados variando demanda, costo de ordenar y costo de mantener de forma monotónica.",
          "source": "Simulado. Generado por plantilla pedagógica, 2026-05-18.",
          "data": {
            "Demanda D (u/año)": 3000,
            "Costo ordenar K ($/orden)": 95,
            "Costo mantener h ($/u-año)": 6.0,
            "Costo unitario c ($/u)": 22,
            "Dato adicional": "Cu=18.00, Co=5.33, fractil crítico=0.771"
          },
          "steps": [
            "Identificar supuestos: demanda repetitiva, horizonte anual y parámetros constantes para el escenario.",
            "Aplicar la relación central: $$F(Q^*)\\ge \\frac{C_u}{C_u+C_o}$$",
            "Con los datos del caso, la cantidad recomendada aproximada es $$Q^*=307.00\\text{ unidades}.$$",
            "Interpretar: si se ordena menos, crece el costo de ordenar; si se ordena más, crece el costo de mantener o de sobreinventario."
          ],
          "managerial": "La política sugerida balancea servicio y costo. Debe revisarse si cambian demanda, lead time, descuentos o restricciones de almacenamiento.",
          "errors": [
            "Mezclar unidades mensuales y anuales.",
            "Usar EOQ aunque la demanda sea errática sin stock de seguridad.",
            "Redondear Q sin revisar impacto de costo."
          ]
        }
      ],
      "summary": [
        "Checklist: unidades consistentes, demanda estimada, costos medidos, supuestos válidos, revisión por sensibilidad.",
        "No usar: demanda no estacionaria fuerte, restricciones de capital/espacio dominantes, perecederos extremos sin adaptar el modelo."
      ],
      "theory": {
        "overview": [
          "El problema Newsvendor es un modelo de un solo periodo: se decide una cantidad antes de observar demanda y no hay reposición dentro del ciclo. El equilibrio se da entre costo de sobrestock $c_o$ y costo de substock $c_u$.",
          "La regla crítica es ordenar hasta el fractil $F(Q^*)=c_u/(c_u+c_o)$. Si quedarse corto es muy costoso, el fractil óptimo sube y se pide más; si sobrar es muy costoso, se pide menos.",
          "El modelo no es solo para periódicos: aplica a moda, alimentos perecederos, reservas hoteleras, boletos, vacunas, merchandising de eventos y capacidad temporal."
        ],
        "assumptions": [
          "Decisión única o ciclos independientes sin arrastre relevante.",
          "Demanda aleatoria con distribución conocida o estimable.",
          "Exceso de inventario tiene valor de rescate o costo de liquidación definido.",
          "Faltante implica margen perdido, penalización o costo de oportunidad cuantificable."
        ],
        "variables": [
          {
            "s": "$c_o$",
            "d": "costo unitario de ordenar de más"
          },
          {
            "s": "$c_u$",
            "d": "costo unitario de ordenar de menos"
          },
          {
            "s": "$F(Q)$",
            "d": "función de distribución acumulada de la demanda"
          },
          {
            "s": "$Q^*$",
            "d": "cantidad óptima de un solo periodo"
          }
        ],
        "applications": [
          "Compra de productos perecederos, moda y prensa.",
          "Reservas de capacidad para eventos con demanda incierta.",
          "Decisiones de inventario pretemporada y campañas promocionales."
        ],
        "advantages": [
          "Conecta decisiones de inventario con riesgo y rentabilidad marginal.",
          "Funciona con distribuciones discretas, continuas o empíricas.",
          "Es intuitivo para explicar trade-offs entre servicio y sobrantes."
        ],
        "limitations": [
          "No modela reposición múltiple ni aprendizaje durante la temporada.",
          "Requiere estimar costos de exceso y faltante, lo cual puede ser subjetivo.",
          "Puede ignorar sustitución, demanda censurada y efectos de precio."
        ],
        "validation": [
          "Calcular correctamente $c_o$ y $c_u$ desde precio, costo y rescate.",
          "Verificar que la demanda usada no esté censurada por inventarios pasados bajos.",
          "Probar sensibilidad del fractil crítico.",
          "Comparar la política con percentiles históricos y capacidad financiera."
        ]
      }
    },
    {
      "slug": "mm1",
      "title": "M/M/1",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mm1-ex1",
          "title": "Ejemplo 1: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.632.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.08$ clientes, $W_q=0.23$ h, $W=0.36$ h, $L=1.71$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex2",
          "title": "Ejemplo 2: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.683.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.47$ clientes, $W_q=0.26$ h, $W=0.38$ h, $L=2.15$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex3",
          "title": "Ejemplo 3: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.727.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.94$ clientes, $W_q=0.30$ h, $W=0.42$ h, $L=2.67$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex4",
          "title": "Ejemplo 4: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.766.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=2.51$ clientes, $W_q=0.35$ h, $W=0.45$ h, $L=3.27$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex5",
          "title": "Ejemplo 5: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.800.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=3.20$ clientes, $W_q=0.40$ h, $W=0.50$ h, $L=4.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex6",
          "title": "Ejemplo 6: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.830.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=4.06$ clientes, $W_q=0.46$ h, $W=0.56$ h, $L=4.89$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex7",
          "title": "Ejemplo 7: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.857.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=5.14$ clientes, $W_q=0.54$ h, $W=0.63$ h, $L=6.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex8",
          "title": "Ejemplo 8: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.881.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=6.55$ clientes, $W_q=0.63$ h, $W=0.71$ h, $L=7.43$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex9",
          "title": "Ejemplo 9: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.903.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=8.43$ clientes, $W_q=0.75$ h, $W=0.83$ h, $L=9.33$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1-ex10",
          "title": "Ejemplo 10: M/M/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.923.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=11.08$ clientes, $W_q=0.92$ h, $W=1.00$ h, $L=12.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/M/1 describe un sistema con llegadas Poisson, tiempos de servicio exponenciales, una sola estación de servicio y cola potencialmente infinita. En notación Kendall, M/M/1/GD/∞/∞ resume llegadas Markovianas, servicio Markoviano y un servidor.",
          "La métrica clave es la utilización $\\rho=\\lambda/\\mu$. Para que exista estado estable se requiere $\\rho<1$. A medida que $\\rho$ se acerca a 1, las esperas crecen de forma no lineal; operar al 95% de utilización no significa solo 5% de holgura, sino riesgo alto de congestión.",
          "Las relaciones de Little conectan número y tiempo: $L=\\lambda W$ y $L_q=\\lambda W_q$."
        ],
        "assumptions": [
          "Llegadas independientes con tasa promedio $\\lambda$.",
          "Tiempos de servicio exponenciales con tasa $\\mu$.",
          "Un único servidor, capacidad de cola infinita y población infinita.",
          "Disciplina general estable; normalmente FCFS para interpretación operativa.",
          "No hay abandono, rechazo ni prioridades."
        ],
        "variables": [
          {
            "s": "$\\lambda$",
            "d": "tasa media de llegada"
          },
          {
            "s": "$\\mu$",
            "d": "tasa media de servicio"
          },
          {
            "s": "$\\rho$",
            "d": "utilización del servidor"
          },
          {
            "s": "$L,L_q$",
            "d": "clientes esperados en sistema y cola"
          },
          {
            "s": "$W,W_q$",
            "d": "tiempos esperados en sistema y cola"
          }
        ],
        "applications": [
          "Cajero único, ventanilla, máquina, servidor simple o estación de inspección.",
          "Primer diagnóstico de congestión en servicios con variabilidad alta.",
          "Evaluación de impacto de aumentar velocidad de servicio."
        ],
        "advantages": [
          "Modelo base de teoría de colas, analítico y fácil de explicar.",
          "Muestra claramente el efecto explosivo de alta utilización.",
          "Requiere pocos parámetros."
        ],
        "limitations": [
          "La exponencial puede exagerar variabilidad si los tiempos reales son más regulares.",
          "No representa múltiples servidores, prioridades, abandono ni capacidad finita.",
          "Promedios estacionarios ocultan picos horarios."
        ],
        "validation": [
          "Estimar $\\lambda$ y $\\mu$ por franjas horarias homogéneas.",
          "Comprobar $\\rho<1$.",
          "Comparar distribución real de servicios contra exponencial.",
          "Validar predicciones con observaciones de cola y tiempos reales."
        ]
      }
    },
    {
      "slug": "mms",
      "title": "M/M/s",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mms-ex1",
          "title": "Ejemplo 1: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.211.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.13$ h, $L=0.63$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex2",
          "title": "Ejemplo 2: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.171.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.12$ h, $L=0.68$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex3",
          "title": "Ejemplo 3: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.364.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.04$ clientes, $W_q=0.01$ h, $W=0.12$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex4",
          "title": "Ejemplo 4: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.255.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.11$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex5",
          "title": "Ejemplo 5: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.200.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.10$ h, $L=0.80$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex6",
          "title": "Ejemplo 6: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.415.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.07$ clientes, $W_q=0.01$ h, $W=0.10$ h, $L=0.90$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex7",
          "title": "Ejemplo 7: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.286.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.09$ h, $L=0.86$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex8",
          "title": "Ejemplo 8: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.220.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.88$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex9",
          "title": "Ejemplo 9: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.452.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.09$ clientes, $W_q=0.01$ h, $W=0.09$ h, $L=1.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mms-ex10",
          "title": "Ejemplo 10: M/M/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.308.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.93$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/M/s generaliza M/M/1 a $s$ servidores paralelos idénticos que atienden desde una cola común. Las llegadas son Poisson y los servicios exponenciales. Su ventaja operativa es el pooling: una sola fila alimenta varios servidores y reduce el riesgo de que un servidor esté ocioso mientras otro tiene cola.",
          "La utilización promedio es $\\rho=\\lambda/(s\\mu)$ y debe ser menor que 1. El cálculo de $P_0$ y $L_q$ requiere la fórmula Erlang C, que estima la probabilidad de esperar cuando todos los servidores están ocupados.",
          "El modelo permite decidir cuántos servidores se necesitan para cumplir un nivel de servicio, por ejemplo mantener $W_q$ bajo cierto umbral."
        ],
        "assumptions": [
          "Servidores paralelos idénticos e intercambiables.",
          "Llegadas Poisson con tasa constante.",
          "Servicios exponenciales independientes.",
          "Cola común, capacidad infinita y población infinita.",
          "Sin abandono ni prioridades."
        ],
        "variables": [
          {
            "s": "$s$",
            "d": "número de servidores"
          },
          {
            "s": "$a=\\lambda/\\mu$",
            "d": "carga ofrecida en Erlangs"
          },
          {
            "s": "$P_0$",
            "d": "probabilidad de sistema vacío"
          },
          {
            "s": "$P(W_q>0)$",
            "d": "probabilidad de que un cliente tenga que esperar"
          },
          {
            "s": "$\\rho$",
            "d": "utilización promedio por servidor"
          }
        ],
        "applications": [
          "Bancos, call centers, cajas de supermercado, peajes, centros de salud y soporte técnico.",
          "Dimensionamiento de personal por franja horaria.",
          "Evaluación de filas únicas frente a múltiples filas separadas."
        ],
        "advantages": [
          "Permite dimensionar capacidad con múltiples servidores.",
          "Captura beneficios del pooling de recursos.",
          "Tiene fórmulas cerradas y es implementable en calculadoras web."
        ],
        "limitations": [
          "Asume servidores homogéneos; en la práctica hay diferencias de habilidad y tiempos.",
          "No incluye abandono, citas, prioridades ni descansos.",
          "Los promedios pueden ocultar variaciones de llegada por hora."
        ],
        "validation": [
          "Calcular $\\rho$ y evitar políticas con utilización excesiva.",
          "Comparar resultados contra observaciones por franja horaria.",
          "Evaluar sensibilidad de $s$ y $\\mu$.",
          "Verificar si existe cola única real o múltiples colas con jockeying."
        ]
      }
    },
    {
      "slug": "mg1",
      "title": "M/G/1",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mg1-ex1",
          "title": "Ejemplo 1: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.632.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.08$ clientes, $W_q=0.23$ h, $W=0.36$ h, $L=1.71$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex2",
          "title": "Ejemplo 2: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.683.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.47$ clientes, $W_q=0.26$ h, $W=0.38$ h, $L=2.15$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex3",
          "title": "Ejemplo 3: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.727.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.94$ clientes, $W_q=0.30$ h, $W=0.42$ h, $L=2.67$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex4",
          "title": "Ejemplo 4: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.766.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=2.51$ clientes, $W_q=0.35$ h, $W=0.45$ h, $L=3.27$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex5",
          "title": "Ejemplo 5: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.800.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=3.20$ clientes, $W_q=0.40$ h, $W=0.50$ h, $L=4.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex6",
          "title": "Ejemplo 6: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.830.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=4.06$ clientes, $W_q=0.46$ h, $W=0.56$ h, $L=4.89$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex7",
          "title": "Ejemplo 7: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.857.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=5.14$ clientes, $W_q=0.54$ h, $W=0.63$ h, $L=6.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex8",
          "title": "Ejemplo 8: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.881.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=6.55$ clientes, $W_q=0.63$ h, $W=0.71$ h, $L=7.43$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex9",
          "title": "Ejemplo 9: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.903.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=8.43$ clientes, $W_q=0.75$ h, $W=0.83$ h, $L=9.33$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mg1-ex10",
          "title": "Ejemplo 10: M/G/1 en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.923.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=11.08$ clientes, $W_q=0.92$ h, $W=1.00$ h, $L=12.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/G/1 mantiene llegadas Poisson y un servidor, pero permite una distribución general de tiempos de servicio. Esto es crucial porque muchas operaciones no tienen tiempos exponenciales: pueden ser casi constantes, lognormales, con mezcla de casos simples y complejos, o con alta variabilidad.",
          "La fórmula de Pollaczek–Khinchine muestra que $L_q$ depende de la varianza del servicio. Dos sistemas con la misma media de servicio pueden tener esperas muy diferentes si uno tiene servicios más variables. Reducir variabilidad puede ser tan valioso como aumentar velocidad media.",
          "Este modelo enseña una idea gerencial clave: estandarizar procesos y segmentar casos complejos reduce colas aunque la capacidad promedio parezca igual."
        ],
        "assumptions": [
          "Llegadas Poisson con tasa $\\lambda$.",
          "Un servidor.",
          "Tiempo de servicio con media y varianza conocidas, no necesariamente exponencial.",
          "Estabilidad: $\\rho=\\lambda E[S]<1$.",
          "Cola infinita y usualmente disciplina FCFS."
        ],
        "variables": [
          {
            "s": "$E[S]$",
            "d": "media del tiempo de servicio"
          },
          {
            "s": "$Var(S)$",
            "d": "varianza del tiempo de servicio"
          },
          {
            "s": "$C_s^2$",
            "d": "coeficiente cuadrado de variación del servicio"
          },
          {
            "s": "$L_q$",
            "d": "cola esperada según Pollaczek–Khinchine"
          }
        ],
        "applications": [
          "Procesos administrativos con casos heterogéneos.",
          "Inspección, reparación, atención médica o soporte técnico con tiempos variables.",
          "Análisis de impacto de estandarización o clasificación de clientes."
        ],
        "advantages": [
          "Representa mejor tiempos de servicio reales que M/M/1.",
          "Evidencia el papel de la variabilidad.",
          "Permite usar datos históricos de servicio."
        ],
        "limitations": [
          "Sigue suponiendo llegadas Poisson y un servidor.",
          "Para distribuciones muy complejas puede requerir simulación.",
          "Algunas métricas distribucionales completas no tienen fórmulas simples."
        ],
        "validation": [
          "Estimar media y varianza del servicio con muestra suficiente.",
          "Revisar estabilidad $\\lambda E[S]<1$.",
          "Comparar M/M/1 vs M/G/1 para cuantificar efecto de variabilidad.",
          "Segmentar por tipo de servicio si hay mezclas muy distintas."
        ]
      }
    },
    {
      "slug": "mgs",
      "title": "M/G/s",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mgs-ex1",
          "title": "Ejemplo 1: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.211.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.13$ h, $L=0.63$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex2",
          "title": "Ejemplo 2: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.171.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.12$ h, $L=0.68$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex3",
          "title": "Ejemplo 3: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.364.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.04$ clientes, $W_q=0.01$ h, $W=0.12$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex4",
          "title": "Ejemplo 4: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.255.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.11$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex5",
          "title": "Ejemplo 5: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.200.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.10$ h, $L=0.80$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex6",
          "title": "Ejemplo 6: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.415.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.07$ clientes, $W_q=0.01$ h, $W=0.10$ h, $L=0.90$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex7",
          "title": "Ejemplo 7: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.286.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.09$ h, $L=0.86$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex8",
          "title": "Ejemplo 8: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.220.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.88$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex9",
          "title": "Ejemplo 9: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.452.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.09$ clientes, $W_q=0.01$ h, $W=0.09$ h, $L=1.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgs-ex10",
          "title": "Ejemplo 10: M/G/s en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.308.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.93$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/G/s combina llegadas Poisson, varios servidores paralelos y tiempos de servicio generales. En muchos cursos se trabaja mediante aproximaciones porque las fórmulas exactas son más complejas que en M/M/s.",
          "La intuición une dos efectos: pooling por múltiples servidores y variabilidad general del servicio. Si el servicio es muy variable, las esperas aumentan; si se estandariza, disminuyen. Por eso se usan aproximaciones como Allen–Cunneen para estimar $W_q$ a partir de $C_s^2$.",
          "Es útil como puente entre fórmulas analíticas y simulación discreta cuando el sistema real tiene múltiples servidores y tiempos no exponenciales."
        ],
        "assumptions": [
          "Llegadas Poisson.",
          "Múltiples servidores paralelos similares.",
          "Distribución general de servicio con media y variabilidad estimables.",
          "Cola común y disciplina FCFS o general sin prioridades explícitas.",
          "Estabilidad $\\lambda < s\\mu$."
        ],
        "variables": [
          {
            "s": "$s$",
            "d": "número de servidores"
          },
          {
            "s": "$C_s^2$",
            "d": "variabilidad relativa del servicio"
          },
          {
            "s": "$\\rho$",
            "d": "utilización promedio"
          },
          {
            "s": "$W_q$",
            "d": "espera media aproximada"
          }
        ],
        "applications": [
          "Centros de atención con varios agentes y tiempos de atención heterogéneos.",
          "Urgencias, talleres de reparación, servicios gubernamentales y logística de muelles.",
          "Evaluación preliminar antes de simular."
        ],
        "advantages": [
          "Más realista que M/M/s cuando los servicios no son exponenciales.",
          "Integra capacidad múltiple y variabilidad.",
          "Sirve para comparar escenarios rápidamente."
        ],
        "limitations": [
          "Muchas métricas son aproximadas.",
          "No captura prioridades, abandono ni turnos con cambios bruscos.",
          "Si servidores no son homogéneos, la aproximación puede ser pobre."
        ],
        "validation": [
          "Usar datos para estimar $C_s^2$.",
          "Comparar aproximaciones con simulación cuando la decisión sea costosa.",
          "Validar supuestos de cola común y servidores equivalentes.",
          "Analizar escenarios con variabilidad baja, media y alta."
        ]
      }
    },
    {
      "slug": "mm1gdc",
      "title": "M/M/1/GD/c/∞",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mm1gdc-ex1",
          "title": "Ejemplo 1: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.632.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.08$ clientes, $W_q=0.23$ h, $W=0.36$ h, $L=1.71$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex2",
          "title": "Ejemplo 2: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.683.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.47$ clientes, $W_q=0.26$ h, $W=0.38$ h, $L=2.15$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex3",
          "title": "Ejemplo 3: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.727.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=1.94$ clientes, $W_q=0.30$ h, $W=0.42$ h, $L=2.67$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex4",
          "title": "Ejemplo 4: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.766.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=2.51$ clientes, $W_q=0.35$ h, $W=0.45$ h, $L=3.27$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex5",
          "title": "Ejemplo 5: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.800.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=3.20$ clientes, $W_q=0.40$ h, $W=0.50$ h, $L=4.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex6",
          "title": "Ejemplo 6: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.830.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=4.06$ clientes, $W_q=0.46$ h, $W=0.56$ h, $L=4.89$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex7",
          "title": "Ejemplo 7: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.857.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=5.14$ clientes, $W_q=0.54$ h, $W=0.63$ h, $L=6.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex8",
          "title": "Ejemplo 8: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.881.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=6.55$ clientes, $W_q=0.63$ h, $W=0.71$ h, $L=7.43$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex9",
          "title": "Ejemplo 9: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.903.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=8.43$ clientes, $W_q=0.75$ h, $W=0.83$ h, $L=9.33$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mm1gdc-ex10",
          "title": "Ejemplo 10: M/M/1/GD/c/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 1,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.923.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=11.08$ clientes, $W_q=0.92$ h, $W=1.00$ h, $L=12.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/M/1/GD/c/∞ agrega capacidad finita $c$ al sistema de un servidor. Esto significa que solo pueden estar dentro del sistema, entre cola y servicio, hasta $c$ clientes. Si llega un cliente y el sistema está lleno, se bloquea, se pierde o debe intentar más tarde según el contexto.",
          "La estabilidad matemática cambia: al existir capacidad finita, el número esperado no crece sin límite aun cuando $\\lambda>\\mu$, pero el bloqueo puede ser muy alto. Por eso la métrica crítica no es solo espera, sino probabilidad de rechazo $P_c$ y tasa efectiva de llegada $\\lambda_e=\\lambda(1-P_c)$.",
          "Este modelo es adecuado cuando hay espacio físico limitado, buffers finitos o cupos máximos."
        ],
        "assumptions": [
          "Llegadas Poisson y servicios exponenciales.",
          "Un servidor.",
          "Capacidad total finita $c$, incluyendo quien está en servicio.",
          "Población fuente infinita.",
          "Disciplina GD; para tiempos medios suele asumirse FCFS si se interpreta la espera individual."
        ],
        "variables": [
          {
            "s": "$c$",
            "d": "capacidad máxima del sistema"
          },
          {
            "s": "$P_c$",
            "d": "probabilidad de sistema lleno o bloqueo"
          },
          {
            "s": "$\\lambda_e$",
            "d": "tasa efectiva de clientes admitidos"
          },
          {
            "s": "$L$",
            "d": "clientes esperados dentro del sistema"
          }
        ],
        "applications": [
          "Parqueaderos, salas pequeñas, buffers de manufactura, líneas telefónicas con cupos y sistemas de almacenamiento.",
          "Diseño de capacidad donde perder clientes es posible.",
          "Evaluación de trade-off entre espacio de espera y rechazo."
        ],
        "advantages": [
          "Modela bloqueo y capacidad física finita.",
          "Evita la interpretación irreal de colas infinitas en espacios limitados.",
          "Permite calcular tasa efectiva de servicio al cliente."
        ],
        "limitations": [
          "Requiere definir qué ocurre con clientes bloqueados.",
          "No modela reintentos ni abandono de forma explícita.",
          "La capacidad finita puede esconder inestabilidad operativa mediante rechazo alto."
        ],
        "validation": [
          "Calcular $P_c$ además de $W_q$.",
          "Distinguir llegadas potenciales de llegadas admitidas.",
          "Verificar si clientes bloqueados se pierden, esperan afuera o regresan.",
          "Evaluar costo de ampliar capacidad frente a costo de rechazo."
        ]
      }
    },
    {
      "slug": "mgsgds",
      "title": "M/G/s/GD/s/∞",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mgsgds-ex1",
          "title": "Ejemplo 1: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.211.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.13$ h, $L=0.63$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex2",
          "title": "Ejemplo 2: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.171.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.12$ h, $L=0.68$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex3",
          "title": "Ejemplo 3: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.364.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.04$ clientes, $W_q=0.01$ h, $W=0.12$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex4",
          "title": "Ejemplo 4: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.255.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.11$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex5",
          "title": "Ejemplo 5: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.200.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.10$ h, $L=0.80$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex6",
          "title": "Ejemplo 6: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.415.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.07$ clientes, $W_q=0.01$ h, $W=0.10$ h, $L=0.90$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex7",
          "title": "Ejemplo 7: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.286.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.09$ h, $L=0.86$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex8",
          "title": "Ejemplo 8: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.220.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.88$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex9",
          "title": "Ejemplo 9: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.452.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.09$ clientes, $W_q=0.01$ h, $W=0.09$ h, $L=1.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mgsgds-ex10",
          "title": "Ejemplo 10: M/G/s/GD/s/∞ en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.308.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.93$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/G/s/GD/s/∞ representa múltiples servidores, tiempos de servicio generales y capacidad total igual al número de servidores. No hay sala de espera: si todos los servidores están ocupados, el cliente se bloquea o se pierde.",
          "Este tipo de sistema se conoce como loss system. Es común en telecomunicaciones, camas hospitalarias sin espera física, bahías de carga sin patio o equipos que requieren atención inmediata. Con servicios no exponenciales, se usan aproximaciones o resultados tipo Erlang loss bajo condiciones específicas.",
          "La pregunta principal no es cuánto espera el cliente, sino qué proporción no puede ser atendida por falta de capacidad inmediata."
        ],
        "assumptions": [
          "Llegadas Poisson o aproximadamente aleatorias.",
          "$s$ servidores paralelos.",
          "Sin cola: capacidad total igual a $s$.",
          "Servicio con distribución general; se requiere media y, para aproximaciones, variabilidad.",
          "Clientes bloqueados no ingresan al sistema."
        ],
        "variables": [
          {
            "s": "$s$",
            "d": "número de servidores/cupos"
          },
          {
            "s": "$B$",
            "d": "probabilidad de bloqueo"
          },
          {
            "s": "$\\lambda_e$",
            "d": "tasa efectiva admitida"
          },
          {
            "s": "$E[S]$",
            "d": "tiempo medio de ocupación"
          }
        ],
        "applications": [
          "Camas UCI, líneas telefónicas troncales, muelles sin espera, equipos alquilables y slots de atención inmediata.",
          "Dimensionamiento de cupos cuando no se permite cola.",
          "Decisiones de inversión en capacidad para reducir pérdidas."
        ],
        "advantages": [
          "Representa sistemas donde la espera no es viable.",
          "Enfoca la decisión en bloqueo y nivel de servicio.",
          "Es útil para capacidad crítica y recursos costosos."
        ],
        "limitations": [
          "No captura listas de espera externas ni reintentos.",
          "Con servicio general puede requerir simulación para alta precisión.",
          "El costo de bloqueo suele ser difícil de estimar."
        ],
        "validation": [
          "Medir ocupación y bloqueo observado.",
          "Definir claramente si bloqueado significa perdido, derivado o reprogramado.",
          "Comparar escenarios con diferente $s$.",
          "Usar simulación si hay horarios, prioridades o estancias muy variables."
        ]
      }
    },
    {
      "slug": "mmr-gdkk",
      "title": "M/MR/GD/K/K reparación de máquinas",
      "area": "Colas",
      "kind": "queue",
      "formula": "\\rho=\\lambda/(s\\mu),\\quad L=\\lambda W,\\quad L_q=\\lambda W_q",
      "examples": [
        {
          "id": "mmr-gdkk-ex1",
          "title": "Ejemplo 1: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 4.8,
            "μ (clientes/h por servidor)": 7.6,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.211.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.13$ h, $L=0.63$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex2",
          "title": "Ejemplo 2: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 5.6,
            "μ (clientes/h por servidor)": 8.2,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.171.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.12$ h, $L=0.68$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex3",
          "title": "Ejemplo 3: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 6.4,
            "μ (clientes/h por servidor)": 8.8,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.364.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.04$ clientes, $W_q=0.01$ h, $W=0.12$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex4",
          "title": "Ejemplo 4: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 7.2,
            "μ (clientes/h por servidor)": 9.4,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.255.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.11$ h, $L=0.77$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex5",
          "title": "Ejemplo 5: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.0,
            "μ (clientes/h por servidor)": 10.0,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.200.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.10$ h, $L=0.80$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex6",
          "title": "Ejemplo 6: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 8.8,
            "μ (clientes/h por servidor)": 10.6,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.415.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.07$ clientes, $W_q=0.01$ h, $W=0.10$ h, $L=0.90$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex7",
          "title": "Ejemplo 7: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 9.6,
            "μ (clientes/h por servidor)": 11.2,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.286.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.09$ h, $L=0.86$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex8",
          "title": "Ejemplo 8: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 10.4,
            "μ (clientes/h por servidor)": 11.8,
            "s servidores": 4,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.220.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.00$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.88$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex9",
          "title": "Ejemplo 9: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 11.2,
            "μ (clientes/h por servidor)": 12.4,
            "s servidores": 2,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.452.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.09$ clientes, $W_q=0.01$ h, $W=0.09$ h, $L=1.00$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        },
        {
          "id": "mmr-gdkk-ex10",
          "title": "Ejemplo 10: M/MR/GD/K/K reparación de máquinas en un sistema de servicio simulado",
          "statement": "Se desea estimar desempeño de una línea de espera con llegadas aleatorias, tiempos de servicio modelados y disciplina general FCFS/GD según el caso.",
          "source": "Simulado. Parámetros generados para docencia, 2026-05-18.",
          "data": {
            "λ (clientes/h)": 12.0,
            "μ (clientes/h por servidor)": 13.0,
            "s servidores": 3,
            "Capacidad c/K": "∞ salvo que el módulo indique límite"
          },
          "steps": [
            "Calcular utilización: $$\\rho=\\frac{\\lambda}{s\\mu}=0.308.$$",
            "Verificar estabilidad: se requiere $\\rho<1$ para modelos con cola infinita.",
            "Aplicar fórmulas del modelo seleccionado; para M/M/1, por ejemplo, $L=\\rho/(1-\\rho)$ y $W=L/\\lambda$.",
            "Resultados aproximados: $L_q=0.01$ clientes, $W_q=0.00$ h, $W=0.08$ h, $L=0.93$ clientes."
          ],
          "managerial": "Si la utilización se acerca a 1, pequeñas variaciones de llegada aumentan fuertemente la espera. Evaluar capacidad, programación o reducción de variabilidad.",
          "errors": [
            "Ignorar condición de estabilidad.",
            "Confundir tasa media de servicio μ con tiempo medio de servicio 1/μ.",
            "Comparar W en horas con metas expresadas en minutos."
          ]
        }
      ],
      "summary": [
        "Checklist: medir λ, μ, distribución, disciplina, capacidad y población fuente.",
        "No usar: sistemas transitorios sin estado estable o llegadas muy dependientes del tiempo sin segmentación."
      ],
      "theory": {
        "overview": [
          "El modelo M/M/R/GD/K/K, o modelo de reparación de máquinas, es un sistema de fuente finita. Hay $K$ máquinas; cada máquina operativa puede fallar con tasa $\\lambda$ y pasar a reparación. Hay $R$ reparadores o servidores. Cuando una máquina está dañada, deja de generar nuevas fallas, por eso la tasa total de llegadas depende del estado.",
          "Si hay $j$ máquinas dañadas, quedan $K-j$ máquinas buenas y la tasa de nuevas fallas es $\\lambda_j=(K-j)\\lambda$. La tasa de reparación es $\\mu_j=j\\mu$ si $j<R$ y $R\\mu$ si $j\\ge R$. Esta estructura lo diferencia de los modelos con población infinita.",
          "La decisión gerencial consiste en equilibrar costo de reparadores contra costo de máquinas paradas. Más reparadores reducen downtime, pero pueden quedar ociosos."
        ],
        "assumptions": [
          "Población finita de $K$ unidades susceptibles de falla.",
          "Cada unidad operativa falla de forma independiente con tasa $\\lambda$.",
          "Tiempos de reparación exponenciales con tasa $\\mu$ por reparador.",
          "Hasta $R$ reparadores trabajan en paralelo.",
          "Disciplina general o FCFS para máquinas esperando reparación."
        ],
        "variables": [
          {
            "s": "$K$",
            "d": "número total de máquinas"
          },
          {
            "s": "$R$",
            "d": "número de reparadores"
          },
          {
            "s": "$j$",
            "d": "máquinas dañadas en el estado actual"
          },
          {
            "s": "$\\lambda_j$",
            "d": "tasa de fallas dependiente del estado"
          },
          {
            "s": "$\\mu_j$",
            "d": "tasa de reparación dependiente del estado"
          },
          {
            "s": "$L$",
            "d": "máquinas esperadas fuera de operación"
          }
        ],
        "applications": [
          "Talleres de mantenimiento, flotas, equipos médicos, maquinaria industrial y sistemas de cómputo internos.",
          "Dimensionamiento de cuadrillas de reparación.",
          "Evaluación de políticas de mantenimiento correctivo y capacidad de soporte."
        ],
        "advantages": [
          "Modela correctamente la población finita de equipos.",
          "Captura que las llegadas disminuyen cuando muchas máquinas ya están dañadas.",
          "Permite evaluar costo de downtime frente a costo de personal."
        ],
        "limitations": [
          "Supone fallas y reparaciones exponenciales; mantenimiento preventivo puede alterar el proceso.",
          "No considera prioridades por criticidad de máquina salvo extensión del modelo.",
          "Puede requerir costos confiables de inactividad para decisiones económicas."
        ],
        "validation": [
          "Confirmar que la tasa $\\lambda$ es por máquina, no tasa total del sistema.",
          "Calcular probabilidades de estado y máquinas promedio dañadas.",
          "Evaluar utilización de reparadores y costo de ociosidad.",
          "Comparar predicciones con registros históricos de fallas y reparaciones."
        ]
      }
    }
  ],
  "exercises": [
    {
      "id": "P01",
      "title": "Caso 1: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "difficulty": "Intermedio",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ Básico.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 113,
        "Parámetro B": 22,
        "Parámetro C": 3.1
      }
    },
    {
      "id": "P02",
      "title": "Caso 2: Análisis de Sensibilidad EOQ aplicado",
      "topic": "Análisis de Sensibilidad EOQ",
      "difficulty": "Avanzado",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en Análisis de Sensibilidad EOQ.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 126,
        "Parámetro B": 24,
        "Parámetro C": 3.2
      }
    },
    {
      "id": "P03",
      "title": "Caso 3: EOQ con descuentos aplicado",
      "topic": "EOQ con descuentos",
      "difficulty": "Básico",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ con descuentos.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 139,
        "Parámetro B": 26,
        "Parámetro C": 3.3
      }
    },
    {
      "id": "P04",
      "title": "Caso 4: EOQ con agotados planificados aplicado",
      "topic": "EOQ con agotados planificados",
      "difficulty": "Intermedio",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ con agotados planificados.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 152,
        "Parámetro B": 28,
        "Parámetro C": 3.4
      }
    },
    {
      "id": "P05",
      "title": "Caso 5: EOQ de tasa continua / EPQ aplicado",
      "topic": "EOQ de tasa continua / EPQ",
      "difficulty": "Avanzado",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ de tasa continua / EPQ.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 165,
        "Parámetro B": 30,
        "Parámetro C": 3.5
      }
    },
    {
      "id": "P06",
      "title": "Caso 6: EOQ bajo incertidumbre aplicado",
      "topic": "EOQ bajo incertidumbre",
      "difficulty": "Básico",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ bajo incertidumbre.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 178,
        "Parámetro B": 32,
        "Parámetro C": 3.6
      }
    },
    {
      "id": "P07",
      "title": "Caso 7: Newsvendor problem aplicado",
      "topic": "Newsvendor problem",
      "difficulty": "Intermedio",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en Newsvendor problem.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 191,
        "Parámetro B": 34,
        "Parámetro C": 3.7
      }
    },
    {
      "id": "P08",
      "title": "Caso 8: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "difficulty": "Avanzado",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ Básico.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 204,
        "Parámetro B": 36,
        "Parámetro C": 3.8
      }
    },
    {
      "id": "P09",
      "title": "Caso 9: Análisis de Sensibilidad EOQ aplicado",
      "topic": "Análisis de Sensibilidad EOQ",
      "difficulty": "Básico",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en Análisis de Sensibilidad EOQ.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 217,
        "Parámetro B": 38,
        "Parámetro C": 3.9
      }
    },
    {
      "id": "P10",
      "title": "Caso 10: EOQ con descuentos aplicado",
      "topic": "EOQ con descuentos",
      "difficulty": "Intermedio",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ con descuentos.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 230,
        "Parámetro B": 40,
        "Parámetro C": 4.0
      }
    },
    {
      "id": "P11",
      "title": "Caso 11: EOQ con agotados planificados aplicado",
      "topic": "EOQ con agotados planificados",
      "difficulty": "Avanzado",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ con agotados planificados.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 243,
        "Parámetro B": 42,
        "Parámetro C": 4.1
      }
    },
    {
      "id": "P12",
      "title": "Caso 12: EOQ de tasa continua / EPQ aplicado",
      "topic": "EOQ de tasa continua / EPQ",
      "difficulty": "Básico",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ de tasa continua / EPQ.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 256,
        "Parámetro B": 44,
        "Parámetro C": 4.2
      }
    },
    {
      "id": "P13",
      "title": "Caso 13: EOQ bajo incertidumbre aplicado",
      "topic": "EOQ bajo incertidumbre",
      "difficulty": "Intermedio",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ bajo incertidumbre.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 269,
        "Parámetro B": 46,
        "Parámetro C": 4.3
      }
    },
    {
      "id": "P14",
      "title": "Caso 14: Newsvendor problem aplicado",
      "topic": "Newsvendor problem",
      "difficulty": "Avanzado",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en Newsvendor problem.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 282,
        "Parámetro B": 48,
        "Parámetro C": 4.4
      }
    },
    {
      "id": "P15",
      "title": "Caso 15: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "difficulty": "Básico",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ Básico.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 295,
        "Parámetro B": 50,
        "Parámetro C": 4.5
      }
    },
    {
      "id": "P16",
      "title": "Caso 16: Análisis de Sensibilidad EOQ aplicado",
      "topic": "Análisis de Sensibilidad EOQ",
      "difficulty": "Intermedio",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en Análisis de Sensibilidad EOQ.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 308,
        "Parámetro B": 52,
        "Parámetro C": 4.6
      }
    },
    {
      "id": "P17",
      "title": "Caso 17: EOQ con descuentos aplicado",
      "topic": "EOQ con descuentos",
      "difficulty": "Avanzado",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ con descuentos.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 321,
        "Parámetro B": 54,
        "Parámetro C": 4.7
      }
    },
    {
      "id": "P18",
      "title": "Caso 18: EOQ con agotados planificados aplicado",
      "topic": "EOQ con agotados planificados",
      "difficulty": "Básico",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ con agotados planificados.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 334,
        "Parámetro B": 56,
        "Parámetro C": 4.8
      }
    },
    {
      "id": "P19",
      "title": "Caso 19: EOQ de tasa continua / EPQ aplicado",
      "topic": "EOQ de tasa continua / EPQ",
      "difficulty": "Intermedio",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ de tasa continua / EPQ.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 347,
        "Parámetro B": 58,
        "Parámetro C": 4.9
      }
    },
    {
      "id": "P20",
      "title": "Caso 20: EOQ bajo incertidumbre aplicado",
      "topic": "EOQ bajo incertidumbre",
      "difficulty": "Avanzado",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ bajo incertidumbre.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 360,
        "Parámetro B": 60,
        "Parámetro C": 5.0
      }
    },
    {
      "id": "P21",
      "title": "Caso 21: Newsvendor problem aplicado",
      "topic": "Newsvendor problem",
      "difficulty": "Básico",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en Newsvendor problem.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 373,
        "Parámetro B": 62,
        "Parámetro C": 5.1
      }
    },
    {
      "id": "P22",
      "title": "Caso 22: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "difficulty": "Intermedio",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en EOQ Básico.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 386,
        "Parámetro B": 64,
        "Parámetro C": 5.2
      }
    },
    {
      "id": "P23",
      "title": "Caso 23: M/M/1 aplicado",
      "topic": "M/M/1",
      "difficulty": "Avanzado",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/1.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 399,
        "Parámetro B": 66,
        "Parámetro C": 5.3
      }
    },
    {
      "id": "P24",
      "title": "Caso 24: M/M/s aplicado",
      "topic": "M/M/s",
      "difficulty": "Básico",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/s.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 412,
        "Parámetro B": 68,
        "Parámetro C": 5.4
      }
    },
    {
      "id": "P25",
      "title": "Caso 25: M/G/1 aplicado",
      "topic": "M/G/1",
      "difficulty": "Intermedio",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/1.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 425,
        "Parámetro B": 70,
        "Parámetro C": 5.5
      }
    },
    {
      "id": "P26",
      "title": "Caso 26: M/G/s aplicado",
      "topic": "M/G/s",
      "difficulty": "Avanzado",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/s.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 438,
        "Parámetro B": 72,
        "Parámetro C": 5.6
      }
    },
    {
      "id": "P27",
      "title": "Caso 27: M/M/1/GD/c/∞ aplicado",
      "topic": "M/M/1/GD/c/∞",
      "difficulty": "Básico",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/1/GD/c/∞.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 451,
        "Parámetro B": 74,
        "Parámetro C": 5.7
      }
    },
    {
      "id": "P28",
      "title": "Caso 28: M/G/s/GD/s/∞ aplicado",
      "topic": "M/G/s/GD/s/∞",
      "difficulty": "Intermedio",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/s/GD/s/∞.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 464,
        "Parámetro B": 76,
        "Parámetro C": 5.8
      }
    },
    {
      "id": "P29",
      "title": "Caso 29: M/MR/GD/K/K reparación de máquinas aplicado",
      "topic": "M/MR/GD/K/K reparación de máquinas",
      "difficulty": "Avanzado",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/MR/GD/K/K reparación de máquinas.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 477,
        "Parámetro B": 78,
        "Parámetro C": 5.9
      }
    },
    {
      "id": "P30",
      "title": "Caso 30: M/M/1 aplicado",
      "topic": "M/M/1",
      "difficulty": "Básico",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/1.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 490,
        "Parámetro B": 80,
        "Parámetro C": 6.0
      }
    },
    {
      "id": "P31",
      "title": "Caso 31: M/M/s aplicado",
      "topic": "M/M/s",
      "difficulty": "Intermedio",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/s.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 503,
        "Parámetro B": 82,
        "Parámetro C": 6.1
      }
    },
    {
      "id": "P32",
      "title": "Caso 32: M/G/1 aplicado",
      "topic": "M/G/1",
      "difficulty": "Avanzado",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/1.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 516,
        "Parámetro B": 84,
        "Parámetro C": 6.2
      }
    },
    {
      "id": "P33",
      "title": "Caso 33: M/G/s aplicado",
      "topic": "M/G/s",
      "difficulty": "Básico",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/s.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 529,
        "Parámetro B": 86,
        "Parámetro C": 6.3
      }
    },
    {
      "id": "P34",
      "title": "Caso 34: M/M/1/GD/c/∞ aplicado",
      "topic": "M/M/1/GD/c/∞",
      "difficulty": "Intermedio",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/1/GD/c/∞.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 542,
        "Parámetro B": 88,
        "Parámetro C": 6.4
      }
    },
    {
      "id": "P35",
      "title": "Caso 35: M/G/s/GD/s/∞ aplicado",
      "topic": "M/G/s/GD/s/∞",
      "difficulty": "Avanzado",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/s/GD/s/∞.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 555,
        "Parámetro B": 90,
        "Parámetro C": 6.5
      }
    },
    {
      "id": "P36",
      "title": "Caso 36: M/MR/GD/K/K reparación de máquinas aplicado",
      "topic": "M/MR/GD/K/K reparación de máquinas",
      "difficulty": "Básico",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/MR/GD/K/K reparación de máquinas.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 568,
        "Parámetro B": 92,
        "Parámetro C": 6.6
      }
    },
    {
      "id": "P37",
      "title": "Caso 37: M/M/1 aplicado",
      "topic": "M/M/1",
      "difficulty": "Intermedio",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/1.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 581,
        "Parámetro B": 94,
        "Parámetro C": 6.7
      }
    },
    {
      "id": "P38",
      "title": "Caso 38: M/M/s aplicado",
      "topic": "M/M/s",
      "difficulty": "Avanzado",
      "time": "40 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/s.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 594,
        "Parámetro B": 96,
        "Parámetro C": 6.8
      }
    },
    {
      "id": "P39",
      "title": "Caso 39: M/G/1 aplicado",
      "topic": "M/G/1",
      "difficulty": "Básico",
      "time": "45 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/1.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 607,
        "Parámetro B": 98,
        "Parámetro C": 6.9
      }
    },
    {
      "id": "P40",
      "title": "Caso 40: M/G/s aplicado",
      "topic": "M/G/s",
      "difficulty": "Intermedio",
      "time": "25 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/s.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 620,
        "Parámetro B": 100,
        "Parámetro C": 7.0
      }
    },
    {
      "id": "P41",
      "title": "Caso 41: M/M/1/GD/c/∞ aplicado",
      "topic": "M/M/1/GD/c/∞",
      "difficulty": "Avanzado",
      "time": "30 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/M/1/GD/c/∞.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 633,
        "Parámetro B": 102,
        "Parámetro C": 7.1
      }
    },
    {
      "id": "P42",
      "title": "Caso 42: M/G/s/GD/s/∞ aplicado",
      "topic": "M/G/s/GD/s/∞",
      "difficulty": "Básico",
      "time": "35 min",
      "competencies": [
        "formulación",
        "cálculo",
        "interpretación gerencial"
      ],
      "source": "Dataset simulado realista. Generado con progresiones aritméticas y parámetros en rangos docentes, 2026-05-18.",
      "context": "Una organización de servicios/operaciones necesita tomar una decisión basada en M/G/s/GD/s/∞.",
      "questions": [
        "Formule el modelo y liste supuestos.",
        "Calcule las métricas o cantidad óptima.",
        "Interprete el resultado para gerencia.",
        "Realice un chequeo de sensibilidad o estabilidad."
      ],
      "data": {
        "Parámetro A": 646,
        "Parámetro B": 104,
        "Parámetro C": 7.2
      }
    }
  ],
  "solutions": [
    {
      "id": "P01",
      "title": "Solución Caso 1: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P02",
      "title": "Solución Caso 2: Análisis de Sensibilidad EOQ aplicado",
      "topic": "Análisis de Sensibilidad EOQ",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P03",
      "title": "Solución Caso 3: EOQ con descuentos aplicado",
      "topic": "EOQ con descuentos",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P04",
      "title": "Solución Caso 4: EOQ con agotados planificados aplicado",
      "topic": "EOQ con agotados planificados",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P05",
      "title": "Solución Caso 5: EOQ de tasa continua / EPQ aplicado",
      "topic": "EOQ de tasa continua / EPQ",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P06",
      "title": "Solución Caso 6: EOQ bajo incertidumbre aplicado",
      "topic": "EOQ bajo incertidumbre",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P07",
      "title": "Solución Caso 7: Newsvendor problem aplicado",
      "topic": "Newsvendor problem",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P08",
      "title": "Solución Caso 8: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P09",
      "title": "Solución Caso 9: Análisis de Sensibilidad EOQ aplicado",
      "topic": "Análisis de Sensibilidad EOQ",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P10",
      "title": "Solución Caso 10: EOQ con descuentos aplicado",
      "topic": "EOQ con descuentos",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P11",
      "title": "Solución Caso 11: EOQ con agotados planificados aplicado",
      "topic": "EOQ con agotados planificados",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P12",
      "title": "Solución Caso 12: EOQ de tasa continua / EPQ aplicado",
      "topic": "EOQ de tasa continua / EPQ",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P13",
      "title": "Solución Caso 13: EOQ bajo incertidumbre aplicado",
      "topic": "EOQ bajo incertidumbre",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P14",
      "title": "Solución Caso 14: Newsvendor problem aplicado",
      "topic": "Newsvendor problem",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P15",
      "title": "Solución Caso 15: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P16",
      "title": "Solución Caso 16: Análisis de Sensibilidad EOQ aplicado",
      "topic": "Análisis de Sensibilidad EOQ",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P17",
      "title": "Solución Caso 17: EOQ con descuentos aplicado",
      "topic": "EOQ con descuentos",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P18",
      "title": "Solución Caso 18: EOQ con agotados planificados aplicado",
      "topic": "EOQ con agotados planificados",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P19",
      "title": "Solución Caso 19: EOQ de tasa continua / EPQ aplicado",
      "topic": "EOQ de tasa continua / EPQ",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P20",
      "title": "Solución Caso 20: EOQ bajo incertidumbre aplicado",
      "topic": "EOQ bajo incertidumbre",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P21",
      "title": "Solución Caso 21: Newsvendor problem aplicado",
      "topic": "Newsvendor problem",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P22",
      "title": "Solución Caso 22: EOQ Básico aplicado",
      "topic": "EOQ Básico",
      "steps": [
        "Definir $D$, $K$, $h$ y costos adicionales.",
        "Calcular la cantidad base con $Q^*=\\sqrt{2KD/h}$ o la variante del módulo.",
        "Evaluar costo total y restricciones del caso.",
        "Validar unidades y hacer sensibilidad de parámetros críticos."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P23",
      "title": "Solución Caso 23: M/M/1 aplicado",
      "topic": "M/M/1",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P24",
      "title": "Solución Caso 24: M/M/s aplicado",
      "topic": "M/M/s",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P25",
      "title": "Solución Caso 25: M/G/1 aplicado",
      "topic": "M/G/1",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P26",
      "title": "Solución Caso 26: M/G/s aplicado",
      "topic": "M/G/s",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P27",
      "title": "Solución Caso 27: M/M/1/GD/c/∞ aplicado",
      "topic": "M/M/1/GD/c/∞",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P28",
      "title": "Solución Caso 28: M/G/s/GD/s/∞ aplicado",
      "topic": "M/G/s/GD/s/∞",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P29",
      "title": "Solución Caso 29: M/MR/GD/K/K reparación de máquinas aplicado",
      "topic": "M/MR/GD/K/K reparación de máquinas",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P30",
      "title": "Solución Caso 30: M/M/1 aplicado",
      "topic": "M/M/1",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P31",
      "title": "Solución Caso 31: M/M/s aplicado",
      "topic": "M/M/s",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P32",
      "title": "Solución Caso 32: M/G/1 aplicado",
      "topic": "M/G/1",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P33",
      "title": "Solución Caso 33: M/G/s aplicado",
      "topic": "M/G/s",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P34",
      "title": "Solución Caso 34: M/M/1/GD/c/∞ aplicado",
      "topic": "M/M/1/GD/c/∞",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P35",
      "title": "Solución Caso 35: M/G/s/GD/s/∞ aplicado",
      "topic": "M/G/s/GD/s/∞",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P36",
      "title": "Solución Caso 36: M/MR/GD/K/K reparación de máquinas aplicado",
      "topic": "M/MR/GD/K/K reparación de máquinas",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P37",
      "title": "Solución Caso 37: M/M/1 aplicado",
      "topic": "M/M/1",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P38",
      "title": "Solución Caso 38: M/M/s aplicado",
      "topic": "M/M/s",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P39",
      "title": "Solución Caso 39: M/G/1 aplicado",
      "topic": "M/G/1",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P40",
      "title": "Solución Caso 40: M/G/s aplicado",
      "topic": "M/G/s",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P41",
      "title": "Solución Caso 41: M/M/1/GD/c/∞ aplicado",
      "topic": "M/M/1/GD/c/∞",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    },
    {
      "id": "P42",
      "title": "Solución Caso 42: M/G/s/GD/s/∞ aplicado",
      "topic": "M/G/s/GD/s/∞",
      "steps": [
        "Identificar $\\lambda$, $\\mu$, servidores y capacidad.",
        "Verificar estabilidad: $\\rho=\\lambda/(s\\mu)<1$ cuando aplique.",
        "Calcular $L_q$, $W_q$, $W$ y $L$ con las fórmulas del módulo.",
        "Validar unidades: horas, minutos y clientes deben ser consistentes."
      ],
      "validation": [
        "Unidades homogéneas.",
        "Resultado factible respecto a supuestos.",
        "Interpretación coherente con el costo o nivel de servicio."
      ],
      "alternative": "Puede contrastarse con simulación en hoja de cálculo para escenarios con variabilidad no cubierta por la fórmula cerrada."
    }
  ],
  "quizzes": [
    {
      "id": "quiz1",
      "title": "Quiz 1: Inventarios",
      "questions": [
        {
          "type": "tf",
          "prompt": "Inventarios Q1: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q2: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q3: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q4: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q5: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q6: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q7: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q8: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q9: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q10: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q11: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q12: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q13: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q14: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q15: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q16: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q17: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q18: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q19: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q20: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q21: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q22: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q23: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q24: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q25: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q26: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q27: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Inventarios Q28: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Inventarios Q29: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Inventarios Q30: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Inventarios Q31: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        }
      ]
    },
    {
      "id": "quiz2",
      "title": "Quiz 2: Colas",
      "questions": [
        {
          "type": "tf",
          "prompt": "Colas Q1: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q2: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q3: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q4: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q5: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q6: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q7: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q8: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q9: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q10: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q11: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q12: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q13: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q14: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q15: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q16: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q17: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q18: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q19: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q20: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q21: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q22: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q23: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q24: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q25: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q26: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q27: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Colas Q28: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Colas Q29: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Colas Q30: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Colas Q31: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        }
      ]
    },
    {
      "id": "quiz3",
      "title": "Quiz 3: Mixto",
      "questions": [
        {
          "type": "tf",
          "prompt": "Mixto Q1: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q2: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q3: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q4: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q5: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q6: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q7: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q8: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q9: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q10: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q11: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q12: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q13: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q14: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q15: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q16: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q17: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q18: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q19: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q20: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q21: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q22: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q23: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q24: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q25: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q26: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q27: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        },
        {
          "type": "mc",
          "prompt": "Mixto Q28: ¿Qué representa el balance principal del modelo?",
          "options": [
            "Costo de ordenar vs mantener",
            "Solo precio unitario",
            "Solo tiempo de servicio",
            "N/D"
          ],
          "answer": 0,
          "feedback": "El balance central iguala fuerzas de costo/capacidad, no solo un parámetro aislado."
        },
        {
          "type": "tf",
          "prompt": "Mixto Q29: En modelos con cola infinita se debe revisar estabilidad.",
          "answer": true,
          "feedback": "La condición típica es ρ<1; sin ella no existe estado estable finito."
        },
        {
          "type": "num",
          "prompt": "Mixto Q30: Si λ=4 y μ=5 en M/M/1, calcule ρ.",
          "answer": 0.8,
          "tol": 0.02,
          "feedback": "ρ=λ/μ=4/5=0.8."
        },
        {
          "type": "match",
          "prompt": "Mixto Q31: Empareje símbolo y significado.",
          "pairs": {
            "D": "demanda",
            "K": "costo de ordenar",
            "h": "costo de mantener"
          },
          "feedback": "Estos símbolos se usan recurrentemente en inventarios."
        }
      ]
    }
  ]
};
