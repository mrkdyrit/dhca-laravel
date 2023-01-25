<?php

return [
    /**
     * Account Types
     * ------------------------------------------------------------
     *
     */
    'user_type' => [
        'doctor' => 100,
        'hr' => 150,
        'hr_head' => 200,
    ],

    /**
     * Messages
     * ------------------------------------------------------------
     */
    'messages' => [
        'success' => [
            'doctors' => [
                'store' => 'Successfully registered a doctor.'
            ],
            'hr' => [
                'store' => 'Successfully registered a HR.'
            ],
            'patients' => [
                'store' => 'Successfully registered a patient.'
            ],
            'medical_records' => [
                'store' => 'Successfully create a medical record for patient.'
            ]
        ],
        'failed' => [
            'doctors' => [
                'store' => 'Failed to register a doctor.'
            ],
            'hr' => [
                'store' => 'Failed to register a HR.'
            ],
            'patients' => [
                'store' => 'Failed to register a patient.'
            ],
            'medical_records' => [
                'store' => 'Failed to create a medical record for patient.'
            ]
        ]
    ]
];