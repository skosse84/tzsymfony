<?php


namespace App\Entity;


class Image
{
    protected $name;
    protected $src;

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getSrc()
    {
        return $this->src;
    }

    public function setSrc($source = null)
    {
        $this->src = $source;
    }
}