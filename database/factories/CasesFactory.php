<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Company;
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
        $clientsIdList = Client::select('id')->get();
        return [
            'sys_id'    => substr($this->faker->sha1(),1,10),
            'client_id' => $this->faker->randomElement($clientsIdList),
            'case_status' => mt_rand(1,5),
            'company_id' => mt_rand(0,2),
            'loan_amount' => mt_rand(1,10000),
            'payment_amount' => mt_rand(1,10000),
            'purpose' => mt_rand(1,3),
            'case_remark' => $this->faker->realText(),
            'disbursement_date' => date('Y-m-d h:i:s'),
            'repayment_period' => date('Y-m-d h:i:s',time() + 3600 * 24 * 30),
            'status' => mt_rand(0,1),
            'create_datetime' => date('Y-m-d h:m:s')
        ];
    }
}
