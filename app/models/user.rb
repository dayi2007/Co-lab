class User < ApplicationRecord
    has_many :post
    has_secure_password validations: false

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6 }, presence: true, on: :create
end
