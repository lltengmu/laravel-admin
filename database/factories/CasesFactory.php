<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CasesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'sys_id'    => substr($this->faker->sha1(),1,10),
            'client_id' => mt_rand(0,100),
            'case_status' => mt_rand(1,4),
            'service_provider' => mt_rand(1,6),
            'loan_amount' => mt_rand(1,10000),
            'payment_amount' => mt_rand(1,10000),
            'purpose' => mt_rand(1,3),
            'case_remark' => $this->faker->realText(),
            'repayment_period' => date('Y-m-d h:i:s'),
            'status' => mt_rand(0,1),
            'create_datetime' => date('Y-m-d h:m:s')
        ];
    }
}
